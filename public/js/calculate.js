
// let counter = 2
const table = document.querySelector('.t-row-1')
const table2 = document.querySelector('.t-row-2')

// table.forEach((table)=>{
// 	table.addEventListener('keydown',(e)=>{
	
// 	if(e.key == 'Enter' && counter <= 8){
// 		let addEntryTab = document.querySelector('.t-row')

// 		// console.log(e.target.parentElement.parentElement.parentElement)

// 		let add = document.createElement('div')

// 		 add.innerHTML = `<div class="t-data">
// 								<div class="entry ids">${counter}</div>
// 								<div class="entry"><input type="text" name="course" placeholder="-"></div>
// 								<div class="entry"><input type="text" name="scores" placeholder="-"></div>
								
// 								<div class="entry"><input type="text" name="credit" placeholder="-"></div>
// 								<div class="entry"><input type="text" name="course-type" placeholder="regular"></div>
// 								<div class="entry grade-point">-</div>						
// 							</div>`

// 		addEntryTab.appendChild(add)	
// 		counter++				

		


// 	}
// })
// })

// console.log(table)
// document.addEventListener('keydown',(e)=>{
	
// 	if(e.key == 'Enter' && counter <= 8){
// 		let addEntryTab = document.querySelector('.t-row')

// 		let add = document.createElement('div')

// 		 add.innerHTML = `<div class="t-data">
// 								<div class="entry ids">${counter}</div>
// 								<div class="entry"><input type="text" name="course" placeholder="-"></div>
// 								<div class="entry"><input type="text" name="scores" placeholder="-"></div>
								
// 								<div class="entry"><input type="text" name="credit" placeholder="-"></div>
// 								<div class="entry"><input type="text" name="course-type" placeholder="regular"></div>
// 								<div class="entry grade-point">-</div>						
// 							</div>`

// 		addEntryTab.appendChild(add)	
// 		counter++				

		


// 	}
// })



// const gradecalc = ()=>{
// 	const tag = document.querySelector('.t-row')

// 	tag.addEventListener('click',(e)=>{
// 		let name = e.target.getAttribute('name')
// 		// console.log(name)
// 		if(name=== "scores"){
// 			// console.log(name)
// 			let scores = e.target
// 			scores.addEventListener('change',()=>{
// 				let mark = scores.value

// 				if(mark >= '80'){
// 					console.log('A')
// 					let grade = event.target.parentElement.parentElement.children[5]
// 					grade.textContent = 'A'
// 					console.log(grade)
// 				}else if(mark >='75' && mark <= '79'){
// 					console.log('B+')
// 					let grade = event.target.parentElement.parentElement.children[5]
// 					grade.textContent = 'B+'
// 					console.log(grade)				
// 				}else if(mark >='70' && mark <= '74'){
// 					console.log('B')
// 					let grade = event.target.parentElement.parentElement.children[5]
// 					grade.textContent = 'B'
// 					console.log(grade)
// 				}else if(mark >='65' && mark <= '69'){
// 					console.log('C+')
// 					let grade = event.target.parentElement.parentElement.children[5]
// 					grade.textContent = 'C+'
// 					console.log(grade)
// 				}
// 				else if(mark >='60' && mark <= '64'){
// 					console.log('C')
// 					let grade = event.target.parentElement.parentElement.children[5]
// 					grade.textContent = 'C'
// 					console.log(grade)
// 				}else if(mark >='55' && mark <= '59'){
// 					console.log('D+')
// 					let grade = event.target.parentElement.parentElement.children[5]
// 					grade.textContent = 'D+'
// 					console.log(grade)
// 				}
// 				else if(mark >='50' && mark <= '54'){
// 					console.log('D')
// 					let grade = event.target.parentElement.parentElement.children[5]
// 					grade.textContent = 'D'
// 					console.log(grade)
// 				}else if(mark >='45' && mark <= '49'){
// 					console.log('E')
// 					let grade = event.target.parentElement.parentElement.children[5]
// 					grade.textContent = 'E'
// 					console.log(grade)

// 				}else{
// 					console.log('F')
// 					let grade = event.target.parentElement.parentElement.children[5]
// 					grade.textContent = 'F'
// 					console.log(grade)
// 				}
// 			})
// 		}
// 	})
// }


// gradecalc()







class Create{
	constructor(table, counter){
		this.table = this.table //document.querySelector('.t-row')
		this.counter = 2
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

				 add.innerHTML = `<div class="t-data">
										<div class="entry ids">${this.counter}</div>
										<div class="entry"><input type="text" name="course" placeholder="-"></div>
										<div class="entry"><input type="text" name="scores" placeholder="-"></div>
										
										<div class="entry"><input type="text" name="credit" placeholder="-"></div>
										<div class="entry"><input type="text" name="course-type" placeholder="regular"></div>
										<div class="entry grade-point">-</div>						
									</div>`

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
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'A'
					console.log(grade)
				}else if(mark >='75' && mark <= '79'){
					console.log('B+')
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'B+'
					console.log(grade)				
				}else if(mark >='70' && mark <= '74'){
					console.log('B')
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'B'
					console.log(grade)
				}else if(mark >='65' && mark <= '69'){
					console.log('C+')
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'C+'
					console.log(grade)
				}
				else if(mark >='60' && mark <= '64'){
					console.log('C')
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'C'
					console.log(grade)
				}else if(mark >='55' && mark <= '59'){
					console.log('D+')
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'D+'
					console.log(grade)
				}
				else if(mark >='50' && mark <= '54'){
					console.log('D')
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'D'
					console.log(grade)
				}else if(mark >='45' && mark <= '49'){
					console.log('E')
					let grade = event.target.parentElement.parentElement.children[5]
					grade.textContent = 'E'
					console.log(grade)

				}else{
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

creating2.calcGrade(table2)
// creating.calcGrade(table)

window.addEventListener('keydown',creating.newTable(table))

window.addEventListener('keydown',creating2.newTable(table2))