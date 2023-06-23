import flat from './flat.json';
import nested from './nested.json';

// nestify(flat);

// function nestify(flat) {
//   //init
//   var nestedRes = {
//     "name": "editor",
//     "root": { ...nestifyByTree(flat, null, flat.root.ref) },
//   }
//   console.log("result of nested:", JSON.stringify(nestedRes, null, 5));
// }

// function nestifyByTree(flat: any, key: string, ref: any) {
//   var element = flat.controls[ref];
//   if (key) {
//     element = { "key": key, ...element };
//   }
//   if (element.children) {
//     element.children = element.children.map(child => {
//       return nestifyByTree(flat, child.key, child.ref);
//     });
//   } else if (element.branches) {
//     element.branches = element.branches.map(branch => {
//       branch.children = branch.children.map(child => {
//         return nestifyByTree(flat, child.key, child.ref);
//       });
//       return branch;
//     });
//   } else if (element.item) {
//     element.item = nestifyByTree(flat, null, element.item.ref);
//   }
//   return element;
// }

// flatten(nested);

// function flatten(nested) {
//   //init
//   var flattenRes = nested;
//   flattenRes.controls = {};
//   flattenRes = flattenByTree(flattenRes, flattenRes.root, 1);
//   console.log("result of flatten:", JSON.stringify(flattenRes, null, 5));
// }

// function flattenByTree(flattenRes, flattenRes, index) {
  
//   if (flattenRes.children) {
//   }
//   return flattenRes;
// }