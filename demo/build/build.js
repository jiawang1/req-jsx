({
    baseUrl: "./..",
    name: "application",
    mainConfigFile:"./../application.js",
    optimize :"uglify2",
    generateSourceMaps :true,
    preserveLicenseComments :false,
    isBuild:true,
    out: "application.min.js"
})