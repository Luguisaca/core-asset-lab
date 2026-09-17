import './core-lab-inspection-defaults';
import { Box3, Material, Mesh, Object3D, Scene, SkeletonHelper, Vector3 } from 'three';
import { VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper.js';

export type AdvancedHelperTool='normals'|'skeleton';

function eachMaterial(material:Material|Material[],callback:(item:Material)=>void){
  (Array.isArray(material)?material:[material]).forEach(callback);
}

export class CoreLabAdvancedHelpers{
  private normals:VertexNormalsHelper[]=[];
  private skeleton:SkeletonHelper|null=null;
  private normalsEnabled=false;
  private skeletonEnabled=false;

  constructor(private scene:Scene,private getRoot:()=>Object3D|null,private log:(message:string)=>void){}

  set(tool:AdvancedHelperTool,enabled:boolean){
    if(tool==='normals'){this.normalsEnabled=enabled;this.rebuildNormals();return}
    this.skeletonEnabled=enabled;this.rebuildSkeleton();
  }

  refresh(){
    if(this.normalsEnabled)this.rebuildNormals();
    if(this.skeletonEnabled)this.rebuildSkeleton();
  }

  update(){this.normals.forEach(helper=>helper.update())}

  clear(){this.clearNormals();this.clearSkeleton()}
  dispose(){this.clear()}

  private clearNormals(){
    this.normals.forEach(helper=>{
      helper.parent?.remove(helper);
      helper.geometry.dispose();
      eachMaterial(helper.material,material=>material.dispose());
    });
    this.normals=[];
  }

  private rebuildNormals(){
    this.clearNormals();
    if(!this.normalsEnabled)return;
    const root=this.getRoot();
    if(!root){this.log('Normals · LOAD A MODEL FIRST');return}
    const size=new Box3().setFromObject(root).getSize(new Vector3());
    const diagonal=Math.max(size.length(),.001);
    const helperSize=Math.min(Math.max(diagonal*.006,.008),.045);
    root.traverse(node=>{
      if(node instanceof Mesh&&node.geometry.attributes.normal){
        const helper=new VertexNormalsHelper(node,helperSize,0xff4fa3);
        helper.renderOrder=900;
        this.normals.push(helper);
        this.scene.add(helper);
      }
    });
    this.log(`Normals · ON · ${this.normals.length} helpers · size ${helperSize.toFixed(3)}`);
  }

  private clearSkeleton(){
    if(!this.skeleton)return;
    this.skeleton.parent?.remove(this.skeleton);
    this.skeleton.geometry.dispose();
    eachMaterial(this.skeleton.material,material=>material.dispose());
    this.skeleton=null;
  }

  private rebuildSkeleton(){
    this.clearSkeleton();
    if(!this.skeletonEnabled)return;
    const root=this.getRoot();
    if(!root){this.log('Skeleton · LOAD A MODEL FIRST');return}
    let hasBones=false;
    root.traverse(node=>{if((node as Object3D&{isBone?:boolean}).isBone)hasBones=true});
    if(!hasBones){this.log('Skeleton · NO BONES FOUND');return}
    const helper=new SkeletonHelper(root);
    eachMaterial(helper.material,material=>{
      material.depthTest=false;
      material.depthWrite=false;
      material.transparent=true;
      material.opacity=.82;
    });
    helper.frustumCulled=false;
    helper.renderOrder=950;
    this.skeleton=helper;
    root.add(helper);
    this.log('Skeleton · ON');
  }
}
