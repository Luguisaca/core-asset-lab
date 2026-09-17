import '../styles/core-lab-workspace.css';

const root=document.querySelector<HTMLElement>('[data-core-lab]');
if(root){
  const session=root.querySelector<HTMLElement>('.lab-panel');
  const inspector=root.querySelector<HTMLElement>('.transform-dock');
  const tabs=inspector?.querySelector<HTMLElement>('.inspector-tabs');
  const scene=inspector?.querySelector<HTMLElement>('[data-inspector-section="scene"]');
  const render=inspector?.querySelector<HTMLElement>('[data-inspector-section="render"]');
  const sceneTab=inspector?.querySelector<HTMLButtonElement>('[data-inspector-tab="scene"]');
  const renderTab=inspector?.querySelector<HTMLButtonElement>('[data-inspector-tab="render"]');

  if(session&&inspector&&tabs&&scene&&render&&sceneTab&&renderTab){
    const workspace=document.createElement('aside');
    workspace.className='lab-workspace';
    workspace.setAttribute('aria-label','Scene and render workspace');
    workspace.innerHTML='<header><div><small>CALIBRATION / WORKSPACE</small><b>SCENE + RENDER</b></div></header>';
    session.insertAdjacentElement('afterend',workspace);

    const desktop=window.matchMedia('(min-width: 1101px)');
    const syncLayout=()=>{
      if(desktop.matches){
        workspace.append(scene,render);
        scene.hidden=false;
        render.hidden=false;
        scene.classList.add('is-active');
        render.classList.add('is-active');
        sceneTab.hidden=true;
        renderTab.hidden=true;
        tabs.classList.add('is-compact');
      }else{
        inspector.append(scene,render);
        scene.classList.remove('is-active');
        render.classList.remove('is-active');
        scene.hidden=true;
        render.hidden=true;
        sceneTab.hidden=false;
        renderTab.hidden=false;
        tabs.classList.remove('is-compact');
        const active=inspector.querySelector<HTMLButtonElement>('[data-inspector-tab].is-active');
        active?.click();
      }
      requestAnimationFrame(()=>window.dispatchEvent(new Event('resize')));
    };
    syncLayout();
    desktop.addEventListener('change',syncLayout);
  }
}
