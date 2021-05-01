
// let counter = 2
const table = document.querySelector('.t-row-1')
// const table2 = document.querySelector('.t-row-2')
const submit = document.querySelector('.submit-btn')
const formSub = document.querySelector('.grade-form')
let gp =[];
let acadYear = document.querySelector('#year').value	
let acadSem = document.querySelector('#sem').value	
console.log(acadYear)
console.log(acadSem)
let academic = acadYear + acadSem
console.log(academic)







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
								<div class="entry sem-1 ">
									<select name="course" id="course" class="course">
										<option value="Auditing">Auditing</option>
										<option value="Networking">Networking</option>
										<option value="Data Mining">Data Mining</option>
										<option value="Java">Java</option>
										<option value="French">French</option>
										<option value="Economics">Economics</option>
										<option value="C#">C#</option>
										<option value="Cryptography">Cryptography</option>
									</select>
									<!-- <input type="text" name="course" class="course" placeholder="-" /> -->
								</div>
								<div class="entry sem-1"><input type="text" name="scores" class="scores" placeholder="-"></div>
								
								<div class="entry sem-1">
									<select name="credit" id="credit" class="credit">
										<option value="2">2</option>
										<option value="3">3</option>
										
									</select>
									<!-- <input type="text" name="credit" class="credit" placeholder="-"> -->
								</div>
								<div class="entry sem-1">
									<select name="credit" id="course-type" class="course-type">
										<option value="regular">regular</option>
										<option value="elective">elective</option>
										
									</select>
									<!-- <input type="text" name="course-type" class="course-type" placeholder="regular"> -->
								</div>
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

			const semister = e.target.parentElement.parentElement.children[0].children[0].textContent
			submit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto;  display: block; shape-rendering: auto;" width="20px" height="20px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<circle cx="50" cy="50" r="32" stroke-width="8" stroke="#17cc53" stroke-dasharray="50.26548245743669 50.26548245743669" fill="none" stroke-linecap="round">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
</circle>
</svg>Loading...`
			
			let course = document.querySelectorAll('.sem-1 .course')
		    const scores = document.querySelectorAll('.sem-1 .scores')
		    const credit = document.querySelectorAll('.sem-1 .credit')
		    const courseType = document.querySelectorAll('.sem-1 .course-type')
			 const gradePoint = document.querySelectorAll('.grade-point')
			 let sem = document.querySelector('#sem').value
			 let year = document.querySelector('#year').value
			
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

			let totalMark=[]

			


			console.log(crs)
			console.log(sco)
			console.log(cred)
			console.log(csrtyp)
			console.log(grade)
			console.log(`this is the year ${year}`)
			console.log(`this is the semester ${sem}`)

			const init =0

			// let real = parseInt(sco)

		let res = sco.reduce((ac,it)=>{
			return ac + it
		},0)


		// console.log(res)
		// console.log(gp)

		//initializing tt
		let tt, tcred,
		newtab = [];
		let totalCred = ()=>{
			
			for(let i =0; i< cred.length; i++){
				newtab.push(parseFloat(cred[i]))
			}

			tcred = newtab.reduce((init, val)=>{
				return init + val
			},0)

			console.log(tcred)
		}


		let mainMark = ()=>{



				for (var i = 0; i < cred.length; i++) {
					totalMark.push(parseFloat(cred[i]) * parseFloat(gp[i]))
				}

				 tt = totalMark.reduce((ab,id)=>{
					return ab + id
				},0)


				console.log(tt)
			}



			
			
			totalCred()
			mainMark()

			//calcultating gpa
			let tcgpa = tt/tcred

			tcgpa = tcgpa.toFixed(2)

			result(year, sem, crs,sco,cred,csrtyp,gp, grade,tcgpa,academic)

			console.log('submitted')
			
			submit.setAttribute('disabled', 'disabled')


			console.log(`your total credit is ${tcred} and your gpa is ${tt} and your cgpa is ${tcgpa}`)







		})
	


	const result = async(year,semister,course,score,credit,courseType,grade, gradePoint,gpa)=>{
		try{
			const res = await axios({
				method:"POST",
				url:"http://localhost:5000/api/v1/result",
				data:{
					year:year,
					semester:semister,
					course:course,
					score:score,
					credit:credit,
					courseType:courseType,
					grade:grade,
					gradePoint:gradePoint,
					gpa:gpa
					// academic_year: acedemic

				}
			})

			if(result.data.status === 'success'){
				showAlert('success', 'Logged in successfully')
		}


			

			 // if (result.data.status === 'success') {
    //         window.setTimeout(() => {
    //             location.assign('/calculator')
    //         }, 1000)
    //     }





		}catch(err){
			showAlert('error', err.response.data.message)
			console.log(err.response);
			submit.removeAttribute('disabled')
			submit.innerHTML ='Calculate'


			let div = document.createElement('div')

		}
	}





	const hideAlert= ()=>{
		const el = document.querySelector('.alert')
		if(el) el.parentElement.removeChild(el)
	}

	
const showAlert = (type, message)=>{
	hideAlert()
	const markup = `<div class="alert alert--${type}">${message}</div>`
	document.querySelector('body').insertAdjacentHTML('afterbegin', markup)
	window.setTimeout(hideAlert,5000)
}




window.addEventListener('keydown',creating.newTable(table))

// window.addEventListener('keydown',creating2.newTable(table2))