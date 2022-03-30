const  config = {
    user:  'sa', // sql user
    password:  'Vitamin5', //sql user password
    server:  'DESKTOP-83Q92JG\\SQLEXPRESS', // if it does not work try- localhost
    database:  'DbTest',
    options: {
        trustedconnection:  true,
        enableArithAbort:  true,
        instancename:  'SQLEXPRESS'  // SQL Server instance name
    },
    port:  1433
}

module.exports = config;
