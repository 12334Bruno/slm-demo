(function(){let e=`https://cdn.jsdelivr.net/pyodide/v0.29.5/full/`,t,n=Promise.resolve();function r(e){self.postMessage({progress:e})}function i(e,t){return new Promise((n,r)=>{e.FS.syncfs(t,e=>e?r(e):n())})}async function a(){r(`Preparing the demo on your device. The first visit may take a minute…`);let{loadPyodide:t}=await import(
/* @vite-ignore */
`${e}pyodide.mjs`),n=await t({indexURL:e});r(`Loading document tools. Your files stay on this device…`),await n.loadPackage([`fastapi`,`lxml`,`sqlite3`,`tzdata`,`beautifulsoup4`]);let a=await fetch(new URL(
/* @vite-ignore */
`../demo/python.zip`,self.location.href));if(!a.ok)throw Error(`The demo files could not be downloaded. Reload to try again.`);n.unpackArchive(await a.arrayBuffer(),`zip`,{extractDir:`/app`}),n.FS.mkdirTree(`/slm-demo-data`),n.FS.mount(n.FS.filesystems.IDBFS,{},`/slm-demo-data`);try{await i(n,!0)}catch{throw Error(`Browser storage is unavailable. Allow site storage, then reload the demo.`)}return await n.runPythonAsync(`
import os, sys
os.environ["SLM_DATA_DIR"] = "/slm-demo-data"
sys.path[:0] = ["/app/backend", "/app/vendor"]
from slm.browser import request as browser_request
`),await i(n,!1),r(`Opening your project…`),n}self.onmessage=({data:{id:e,payload:r}})=>{n=n.then(async()=>{try{t||=a();let n=await t;n.globals.set(`browser_payload`,r);let o=JSON.parse(await n.runPythonAsync(`await browser_request(browser_payload)`));JSON.parse(r).method!==`GET`&&o.status<400&&await i(n,!1),self.postMessage({id:e,result:o})}catch(t){self.postMessage({id:e,error:t.message||String(t)})}})}})();