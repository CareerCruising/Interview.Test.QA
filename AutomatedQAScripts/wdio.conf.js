const timeout = process.env.DEBUG ? 99999999 : 100000

exports.config = {
    
    specs: [
        './test/aboutMe.spec.js',
        './test/changePicture.spec.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
   
    maxInstances: 10,
   
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome'
    }],
   
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost:4200',
    waitforTimeout: 10000,
   
    connectionRetryTimeout: 90000,
    
    connectionRetryCount: 3,
    
    services: ['selenium-standalone'],
    
    framework: 'mocha',
    
    reporters: ['dot','spec'],
  
    mochaOpts: {
        ui: 'tdd',
        timeout: timeout
    },
   
}
