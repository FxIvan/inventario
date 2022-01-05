const mongoose = require('mongoose')

//Hacemos la conexion a la base de datos
const DB_URL = 'mongodb://localhost:27017/prueba'
mongoose.connect(DB_URL, {useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>{
    console.log('Conexcion Exitosa')
})
.catch((err)=>{
    console.log('Error de Conexion:'.err)
})
//Estructuramos el esquema
const UsuariosSchema = new mongoose.Schema(
    {
        nombre:{
            type:String,
            require:true
        },
        numberPhone:{
            type:Number,
            require:true,
            default:'1111111111'
        },
        email:{
            require:true,
            type:String,
            unique: true //para que este sea unico y no se repita en la db le tenemos que decir a mongoose que cree un un atributo indice
        },
    },
    {
            timestamps:true, //para que se carge la fecha y hora en la que se cargo a la base de datos
            versionKey:false
    }
    
)
//Para que no se repita la informacion
mongoose.set('autoIndex',true) //Crea index para los modelos de la base de datos, este va acompañado de unique:true

//Creamos como se va a llamar el esquema en la base de dato de mongo
const Usuarios = new mongoose.model('usuarios',UsuariosSchema)

//Creamos el Esquema

Usuarios.create({
    name:'Ivan',
    numberPhone:'1136887781',
    email:'almendraivan210@gmail.com'
})
