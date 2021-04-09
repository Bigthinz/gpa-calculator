
// let counter = 2
const table = document.querySelector('.t-row-1')
// const table2 = document.querySelector('.t-row-2')
const submit = document.querySelector('.submit-btn')
const formSub = document.querySelector('.grade-form')
let gp =[]







class Create{
	constructor(table, counter, submit){
		this.table = this.table //document.querySelector('.t-row')
		this.counter = 2
		this.submit = this.submit
		// console.log(this.table)
	}
 
 	newTable(table){
		 		table.addEventListener('keyup',(e)=>{
		 			// console.log(this.table)
		 			
			
			if(e.key == 'Enter' && this.counter <= 8){
				let addEntryTab = table
				let num = this.counter
				console.log(this.counter)

				// console.log(e.target.parentElement.parentElement.parentElement)

				let add = document.createElement('div')
				add.className = 't-data'

				 add.innerHTML = `
								<div class="entry ids">${this.counter}</div>
								<div class="entry sem-1"><input type="text" name="course" class="course" placeholder="-" /></div>
								<div class="entry sem-1"><input type="text" name="scores" class="scores" placeholder="-"></div>
								
								<div class="entry sem-1"><input type="text" name="credit" class="credit" placeholder="-"></div>
								<div class="entry sem-1"><input type="text" name="course-type" class="course-type" placeholder="regular"></div>
								<div class="entry sem-1 grade-point">-</div>						
							`

				addEntryTab.appendChild(add)	
				this.counter = 1 + this.counter		
				this.prevCount(e)		

		


			}
		})

	}


	calcGrade(table){
					
				// const tag = document.querySelector('.t-row')

				table.addEventListener('click',(e)=>{
					let name = e.target.getAttribute('name')
					// console.log(name)
					if(name=== "scores"){
						// console.log(name)
						let scores = e.target
						scores.addEventListener('change',()=>{
							let mark = scores.value

							this.checkmarks(mark)
							// this.newTable(this.table)
						})
					}
				})
			

		}




		prevCount(e){
			console.log(e.target.parentElement)
		}



		checkmarks(mark){

				if(mark >= '80'){
					console.log('A')
					let point = 4.0
					gp.push(point)
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'A'
					console.log(grade)
				}else if(mark >='75' && mark <= '79'){
					let point = 3.5
					gp.push(point)
					console.log('B+')
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'B+'
					console.log(grade)				
				}else if(mark >='70' && mark <= '74'){
					let point = 3.0
					gp.push(point)
					console.log('B')
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'B'
					console.log(grade)
				}else if(mark >='65' && mark <= '69'){
					let point = 2.5
					gp.push(point)
					console.log('C+')
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'C+'
					console.log(grade)
				}
				else if(mark >='60' && mark <= '64'){
					let point = 2.0
					gp.push(point)
					console.log('C')
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'C'
					console.log(grade)
				}else if(mark >='55' && mark <= '59'){
					let point = 1.5
					gp.push(point)
					console.log('D+')
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'D+'
					console.log(grade)
				}
				else if(mark >='50' && mark <= '54'){
					let point = 1.0
					gp.push(point)
					console.log('D')
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'D'
					console.log(grade)
				}else if(mark >='45' && mark <= '49'){
					let point = 0.5
					gp.push(point)
					console.log('E')
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'E'
					console.log(grade)

				}else{
					let point = 0.0
					gp.push(point)
					console.log('F')
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'F'
					console.log(grade)
				}
	}


	



}




let creating = new Create(table)
let creating2 = new Create(table)

creating.calcGrade(table)

// creating2.calcGrade(table2)
// creating.calcGrade(table)




		submit.addEventListener('click',e=>{
			e.preventDefault()

			console.log(e.target.parentElement.parentElement.children[0].children[0].textContent)

			
			let course = document.querySelectorAll('.sem-1 .course')
		    const scores = document.querySelectorAll('.sem-1 .scores')
		    const credit = document.querySelectorAll('.sem-1 .credit')
		    const courseType = document.querySelectorAll('.sem-1 .course-type')
		     const gradePoint = document.querySelectorAll('.grade-point')
		    let crs = []
		    let sco = []
		    let cred = []
		    let csrtyp = []
		    let grade = []

		    // console.log(document.querySelectorAll('.sem-1 .entry .course'))

			course.forEach((item)=>{
				
				crs.push(item.value)
				
			})
			scores.forEach((item)=>{
				
				sco.push(parseInt(item.value))

				
				
			})
			credit.forEach((item)=>{
				
				cred.push(item.value)
				
			})
			courseType.forEach((item)=>{
				
				csrtyp.push(item.value)
				
			})

			gradePoint.forEach((item)=>{
				
				grade.push(item.textContent)
				
			})


			console.log(crs)
			console.log(sco)
			console.log(cred)
			console.log(csrtyp)
			console.log(grade)

			const init =0

			// let real = parseInt(sco)

		let res = sco.reduce((ac,it)=>{
			return ac + it
		},0)


		console.log(res)
		console.log(gp)

			
		})
	



window.addEventListener('keydown',creating.newTable(table))

// window.addEventListener('keydown',creating2.newTable(table2))