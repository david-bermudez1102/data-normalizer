import React, { useState } from "react"
import "./App.css"

/* function to _throw the errors */
function _throw(m) {
	throw m
}

const getData = input => {
	/* create our array of valid semesters. All elements are downcased since semester won't be case sensitive */
	const validSemesters = [
		"f",
		"fall",
		"w",
		"winter",
		"s",
		"spring",
		"su",
		"summer"
	]

	/* Convert the string into an array with the data we need (Splitting by space) and only keeping non Emty values */
	const data = input.split(" ").filter(d => d !== "" && d)

	/* We Check if department and course have a space delimiter by splitting with regex and checking the length. If the length is 1, it means the department is already separate from the course number and then we can shift the 2 first elemens from the array(Since it's not a method that requires too much memory and it's gonna be used on the client side, shift would be ok). Otherwise, we just split our string into a new array with department and course number and filter only no empty values. */
	const departmentCourse =
		data[0].split(/([0-9]+)/).length === 1
			? [data.shift(), data.shift()]
			: data
					.shift()
					.replace(/[:-]/, "") // We remove the delimiters colon or dash
					.split(/([0-9]+)/)
					.filter(d => d !== "" && d)

	/* If department is NaN when parsing, it means it is a string containing the dept. Otherwise, it meanse user is inserting a number it will throw an error */
	const department = Number.isNaN(parseInt(departmentCourse[0]))
		? departmentCourse[0]
		: _throw("You should start with a department")

	/* For the course number, we implement the same logic as above, except we do expect a number, otherwise, it will fail */
	const course = Number.isNaN(parseInt(departmentCourse[1]))
		? _throw("Enter a valid course number.")
		: parseInt(departmentCourse[1])

	/* Now data should only contain the semester and the year. If data.length equals to 1, it means semester and year don't have a space and then we split it with regex to separate the year from the semester. Otherwise, we just leave data as is. */
	const semesterYear =
		data.length === 2
			? data
			: data.length
			? data[0].split(/([0-9]+)/)
			: _throw("Enter a semester and a year!")

	/* We check if it's NaN, it means JS couldn't parse the string to number, which means semesterYear[0] is our semester, otherwise it has to be the last element. */
	const semester = Number.isNaN(parseInt(semesterYear[0]))
		? semesterYear[0]
		: semesterYear[1]

	const year = Number.isNaN(parseInt(semesterYear[0]))
		? semesterYear[1]
		: semesterYear[0]

	/* Semester, year and other validations */

	if (!validSemesters.includes(semester.toLowerCase()))
		_throw(`Please include a valid semester. Got: ${semester || "No Semester"}`)

	if (!year || ![2, 4].includes(year.length))
		_throw(`Please include a valid year. Got: ${year || "No Year"}`)

	/* Finally return our object after validations pass */

	return { department, course, semester, year: parseInt(year) } // We return our final object
}

function App() {
	const [state, setState] = useState("")

	const handleSubmit = e => {
		e.preventDefault()
		try {
			const data = getData(state)
			const { department, course, year, semester } = data
			alert(
				`Here is the normalized data: { Department: ${department}, Course: ${course}, Year: ${year}, semester:${semester} }. You can also check the console log to see the object normalized.`
			)
		} catch (error) {
			alert(error)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='course'
				placeholder={"Enter course number"}
				onChange={e => setState(e.target.value)}
				value={state}
			/>
			<input type={"submit"} />
		</form>
	)
}

export default App
