import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import  million from   "million/compiler";


export default defineConfig({
  plugins: [pluginReact()],
    
    tools:{
       rspack:{
        plugins: [million.webpack({ auto: true })]
       }
    }
});
