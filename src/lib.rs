extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

// more idiomatic rust code
#[wasm_bindgen]
pub fn add_one(x: u32) -> u32 {
    x + 1
}

// #[no_mangle]
// pub extern fn add_one(x: u32) -> u32 {
//     x + 1
// }