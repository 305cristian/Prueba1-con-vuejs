const v=new Vue({
	el:'#app',
	data:{
		titulo:'Hola cris Katita',
		subtitulo:'Hola gusgus',
		planetas:[
					{nombre:'Mercurio',diametro: 2},
					{nombre:'Venus',diametro: 2},
					{nombre:'Tierra',diametro:0}
				],
	    nuevoPlaneta:'',
		insertarDiametro:'',
		total:0
	},
	methods:{
		agregarPlaneta(){
			this.planetas.push({
				nombre: this.nuevoPlaneta, diametro:this.insertarDiametro
			})
			this.nuevoPlaneta=''
			this.insertarDiametro=''
		},
		otroMetodo(){
			console.log('otro metodo')
		}
	},
	computed:{
		sumarPlanetas(){
				this.total=0;
				for(planeta of this.planetas){
					this.total=this.total + planeta.diametro;
				}
		return this.total;
		}
		
		
	}
	
})