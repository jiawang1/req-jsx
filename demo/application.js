 require.config({
                        baseUrl: ".",
                        paths: {
                            babel:'lib/babel-5.8.22.min',
                            jsx:'./../jsx'
                        }
                    });
        require([
                 'jsx!helloworld.jsx'
                ], function (hello) {
            console.log(hello);
        });

    
