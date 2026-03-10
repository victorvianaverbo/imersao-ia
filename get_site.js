const { execSync } = require('child_process');
try {
    const data = execSync('netlify api listSites --data "{\\"filter\\":\\"all\\"}"', { encoding: 'utf8' });
    const sites = JSON.parse(data);
    const target = sites.find(s => s.custom_domain === 'iafunil.com.br' || (s.url && s.url.includes('iafunil')));
    if (target) {
        console.log('ID:' + target.id);
        console.log('NAME:' + target.name);
    } else {
        console.log('DOMAINS:' + sites.map(s => s.custom_domain).join(', '));
    }
} catch (e) {
    console.error(e.message);
}
