import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Leonardo Igler',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Continuous Integration and Continuous Deployment',
			'Automatic testing',
			'Frequent merges'
		],
		// Which CI/CD tools do you use in your project?
		tools: '...',
		// What do you want to learn in this workshop? 
		expectations: [
			'Find out all the cool stuff I am currently missing on my project'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'Climbing', 
			'Reading', 
			'Football'
		]
	}
});
