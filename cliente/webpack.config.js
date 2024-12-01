module.exports ={
    resolve:{       //zlib: require.resolve("browserify-zlib")
        fallback:{ zlib: false }, 
    },
    resolve:{
        fallback:{ url: require.resolve("url/") }, 
    },
    resolve:{
        fallback:{ path: require.resolve("path-browserify") }, 
    },
    resolve:{
        fallback:{ util: require.resolve("util/") }, 
    },
    resolve:{
        fallback:{ http: require.resolve("stream-http") }, 
    },
    resolve:{
        fallback:{ stream: require.resolve("stream-browserify") }, 
    },
};