const { Script } = require('vm');
const { readFileSync } = require('fs');

const getDeviceId = () =>
  new Promise(resolve => {
    const window = require('./browser-env-fix.js')();

    window._smReadyFuncs = [
      () => {
        resolve(window.SMSdk.getDeviceId());
      },
    ];
    window._smConf = {
      organization: 'UWXspnCCJN4sfYlNfqps',
      appId: 'default',
      publicKey:
        'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCmxMNr7n8ZeT0tE1R9j/mPixoinPkeM+k4VGIn/s0k7N5rJAfnZ0eMER+QhwFvshzo0LNmeUkpR8uIlU/GEVr8mN28sKmwd2gpygqj0ePnBmOW4v0ZVwbSYK+izkhVFk2V/doLoMbWy6b+UnA8mkjvg0iYWRByfRsK2gdl7llqCwIDAQAB',
      protocol: 'https',
    };

    // 用 vm 运行，避免污染 node global
    const smScript = new Script(readFileSync('./fp.min.js'));
    smScript.runInNewContext(window);
  });

getDeviceId().then(console.log);
