/*
 * Module 12 - Organizing TypeScript Code
 * Topics: 
 *      IIFEs and Closures in TypeScript
 *      namespace Keyword
 *      Using Modules in TypeScript
 *      module Keyword
 *      namespace Keyword
 *      export Keyword
 *      Dynamic import Expressions
 */

console.log("Module 12 - Organizing TypeScript Code complete.js loaded...");

namespace Complete {

    console.log("");
    console.log("****************************************************************");
    console.log("Topic - IIFEs and Closures in TypeScript");
    console.log("****************************************************************");

    let globalLet11: number = 1;
    function globalFunction11() { console.log(`globalFunction11(): globalLet11 is ${globalLet11}`); }
    globalFunction11();

    // These cause compiler errors, but work in JavaScrict
    // Note: For node.js change window to global
    // console.log(window.globalLet11);
    // window.globalFunction11();

    // IIFE
    (function() { 
        let iifeLet11: number = 1;
        function iifeFunction11() { console.log(`iifeFunction11(): iifeLet11 is ${iifeLet11}`); }
        iifeFunction11();
    }());

    // These cause compiler errors, but do not exist on window or global
    // Note: For node.js change window to global
    // console.log(window.iifeLet11);
    // window.iifeFunction11();


    class TSClass1 {
        property1: string;
        constructor(property1: string, public property2) { this.property1 = property1; }
        method1() {}
    }

    // View the complete.js to see how TS transpiles this
    // In tsconfig.json change target to ES5 to compare
    // Note the IIFE being used


    console.log("");
    console.log("****************************************************************");
    console.log("Topic - namespace Keyword");
    console.log("****************************************************************");

    // Avoid polution of global namespace
    namespace TSNamespace { 
        export interface TSNamespaceInterface {}
        export class TSNamespaceClass {}
        export const tsNamespaceConst: number = 0;
        export let tsNamespaceLet: number = 0;

        interface HiddenInterface {}
        class HiddenClass {}
        const hiddenConst: number = 0;
        let hiddenLet: number = 0;   
    }

    let globalTSNamespaceInterface: TSNamespace.TSNamespaceInterface = {};
    let globalTSNamespaceClass = new TSNamespace.TSNamespaceClass();
    let globalTSNamespaceConst = TSNamespace.tsNamespaceConst;
    let globalTSNamespaceLet = TSNamespace.tsNamespaceLet;

    // Not exported, so not available outside the namespace
    // let globalHiddenInterface: TSNamespace.HiddenInterface = {};
    // let globalHiddenClass = new TSNamespace.HiddenClass();
    // let globalHiddenConst = TSNamespace.HiddenConst;
    // let globalHiddenLet = TSNamespace.HiddenLet;

    // View the complete.js to see how TS transpiles this
    // In tsconfig.json target should be ES6 when finished
    
    // Prior to TypeScript 1.5, module was for external modules and namespace was for internal modules
    // Might need chrome://flags to enable "Experimental Web Platform features"
    
}

console.log("");
console.log("****************************************************************");
console.log("Topic - import Keyword");
console.log("****************************************************************");

// For this to work, complete.js must be loaded in the HTML file as a module
//      <script type="module" src="complete.js"></script>
import { exportConst } from './completeExports.js'
console.log(exportConst);

import * as exports from './completeExports.js'
console.log(exports.exportConst);

let exportType1: exports.exportType;
let exportInterface1: exports.exportInterface;
let exportClass1: exports.exportClass;


console.log("");
console.log("****************************************************************");
console.log("Topic - Dynamic import Expressions");
console.log("****************************************************************");

// In tsconfig.json add "module": "ESNext"
//      But works without it and error never goes away
// function dynamicImportExpression() {
//     import("./completeExports.js")
//         .then(imports => console.log(imports.exportConst));
// }
// dynamicImportExpression();
