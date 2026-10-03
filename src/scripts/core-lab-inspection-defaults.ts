const DEFAULT_BLOOM=.15;
const root=document.querySelector<HTMLElement>('[data-core-lab]');

if(root){
  window.setTimeout(()=>{
    const bloom=root.querySelector<HTMLInputElement>('[data-render="bloom"]');
    const output=root.querySelector<HTMLOutputElement>('[data-render-value="bloom"]');
    if(!bloom)return;
    bloom.value=String(DEFAULT_BLOOM);
    if(output)output.value=DEFAULT_BLOOM.toFixed(2);
    bloom.dispatchEvent(new Event('input',{bubbles:true}));
  },0);
}
