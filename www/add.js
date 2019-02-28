// use this JS API to load the WASM module and start using it in a streaming mode
// i.e. without having to wait
WebAssembly.instantiateStreaming(fetch("wasm_add_one_bg_gc.wasm"))
    .then(wasmModule => {
        // list exported functions to the console
        console.log(wasmModule.instance.exports);

        // this saves the exported function for use in JS
        add_one = wasmModule.instance.exports.add_one;
    });