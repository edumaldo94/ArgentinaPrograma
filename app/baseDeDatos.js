const { Sequelize } = require('sequelize');



    const sequelize = new Sequelize('baseforo', 'root', 'hola123', {
      host: 'localhost',
      dialect: 'mysql',
    },{
        define: {
            scopes:{
                excludeCreatedAtUpdateAt:{
                    attributes:{
                    exclude:['createdAt','updatedAt']
                },
                },
            },
            timestamps: false,
        }
    });
    

    
   module.exports= sequelize