$(document).ready(function() {
	// Selectors
	var $stepn = $('#step-n');
	var $stepnext = $('#step-next');
	var $stepprev = $('#step-prev');

	var $barber = $('#barber');
	var $customers = $('#customers');
	var $mutex = $('#mutex');
	var $waiting = $('#waiting');
	var $status = $('#status');
	var $barberchair = $('#barberchair');

	// Default number of chairs
	var chairs = 5;

	// Initializes number of current step
	var step = 1;

	// JSON object obtained from a Python implementation of the Sleeping Barber
	var steps = [
		{
			barber: 0,
			customers: [],
			mutex: 0,
			waiting: 0,
			chair: '',
			status: 'Barbershop open for business... even if the barber is sleeping.'
		},
		{
			barber: 0,
			customers: ['Customer #1'],
			mutex: 1,
			waiting: 0,
			chair: '',
			status: 'Customer #1 arrives and locks the mutex to see if they will wait.'
		},
		{
			barber: 0,
			customers: ['Customer #1'],
			mutex: 0,
			waiting: 1,
			chair: '',
			status: 'Customer #1 sits down and releases the mutex.'
		},
		{
			barber: 1,
			customers: ['Customer #1'],
			mutex: 1,
			waiting: 1,
			chair: '',
			status: 'Barber sees a customer, locks the mutex and calls the customer.'
		},
		{
			barber: 1,
			customers: [],
			mutex: 0,
			waiting: 0,
			chair: 'Customer #1',
			status: 'Barber walks Customer #1 to the barber\'s chair and releases the mutex.'
		},
		{
			barber: 1,
			customers: ['Customer #2'],
			mutex: 1,
			waiting: 0,
			chair: 'Customer #1',
			status: 'Customer #2 arrives and locks the mutex to see if they will wait.'
		},
		{
			barber: 1,
			customers: ['Customer #2'],
			mutex: 0,
			waiting: 1,
			chair: 'Customer #1',
			status: 'Customer #2 sits down and releases the mutex.'
		},
		{
			barber: 1,
			customers: ['Customer #2', 'Customer #3'],
			mutex: 1,
			waiting: 1,
			chair: 'Customer #1',
			status: 'Customer #3 arrives and locks the mutex to see if they will wait.'
		},
		{
			barber: 1,
			customers: ['Customer #2', 'Customer #3'],
			mutex: 0,
			waiting: 2,
			chair: 'Customer #1',
			status: 'Customer #3 sits down and releases the mutex.'
		},
		{
			barber: 1,
			customers: ['Customer #2', 'Customer #3', 'Customer #4'],
			mutex: 1,
			waiting: 2,
			chair: 'Customer #1',
			status: 'Customer #4 arrives and locks the mutex to see if they will wait.'
		},
		{
			barber: 1,
			customers: ['Customer #2', 'Customer #3', 'Customer #4'],
			mutex: 0,
			waiting: 3,
			chair: 'Customer #1',
			status: 'Customer #4 sits down and releases the mutex.'
		},
		{
			barber: 1,
			customers: ['Customer #2', 'Customer #3', 'Customer #4'],
			mutex: 0,
			waiting: 3,
			chair: '',
			status: 'Barber finishes cutting Customer #1\'s hair.'
		},
		{
			barber: 1,
			customers: ['Customer #2', 'Customer #3', 'Customer #4'],
			mutex: 0,
			waiting: 3,
			chair: '',
			status: 'Customer #1 leaves the barbershop.'
		},
		{
			barber: 1,
			customers: ['Customer #2', 'Customer #3', 'Customer #4', 'Customer #5'],
			mutex: 1,
			waiting: 3,
			chair: '',
			status: 'Customer #5 arrives and locks the mutex to see if they will wait.'
		},
		{
			barber: 1,
			customers: ['Customer #2', 'Customer #3', 'Customer #4', 'Customer #5'],
			mutex: 0,
			waiting: 4,
			chair: '',
			status: 'Customer #5 sits down and releases the mutex.'
		},
		{
			barber: 1,
			customers: ['Customer #2', 'Customer #3', 'Customer #4', 'Customer #5'],
			mutex: 1,
			waiting: 4,
			chair: '',
			status: 'Barber sees a customer, locks the mutex and calls the customer.'
		},
		{
			barber: 1,
			customers: ['Customer #2', 'Customer #3', 'Customer #5'],
			mutex: 0,
			waiting: 3,
			chair: 'Customer #4',
			status: 'Barber walks Customer #4 to the barber\'s chair and releases the mutex.'
		},
		{
			barber: 1,
			customers: ['Customer #2', 'Customer #3', 'Customer #5'],
			mutex: 0,
			waiting: 3,
			chair: '',
			status: 'Barber finishes cutting Customer #4\'s hair.'
		},
		{
			barber: 1,
			customers: ['Customer #2', 'Customer #3', 'Customer #5'],
			mutex: 0,
			waiting: 3,
			chair: '',
			status: 'Customer #4 leaves the barbershop.'
		},
		{
			barber: 1,
			customers: ['Customer #2', 'Customer #3', 'Customer #5'],
			mutex: 1,
			waiting: 3,
			chair: '',
			status: 'Barber sees a customer, locks the mutex and calls the customer.'
		},
		{
			barber: 1,
			customers: ['Customer #3', 'Customer #5'],
			mutex: 0,
			waiting: 2,
			chair: 'Customer #2',
			status: 'Barber walks Customer #2 to the barber\'s chair and releases the mutex.'
		},
		{
			barber: 1,
			customers: ['Customer #3', 'Customer #5'],
			mutex: 0,
			waiting: 2,
			chair: '',
			status: 'Barber finishes cutting Customer #4\'s hair.'
		},
		{
			barber: 1,
			customers: ['Customer #3', 'Customer #5'],
			mutex: 0,
			waiting: 2,
			chair: '',
			status: 'Customer #2 leaves the barbershop.'
		},
		{
			barber: 1,
			customers: ['Customer #3', 'Customer #5'],
			mutex: 1,
			waiting: 2,
			chair: '',
			status: 'Barber sees a customer, locks the mutex and calls the customer.'
		},
		{
			barber: 1,
			customers: ['Customer #3'],
			mutex: 0,
			waiting: 1,
			chair: 'Customer #5',
			status: 'Barber walks Customer #5 to the barber\'s chair and releases the mutex.'
		},
		{
			barber: 1,
			customers: ['Customer #3'],
			mutex: 0,
			waiting: 1,
			chair: '',
			status: 'Barber finishes cutting Customer #5\'s hair.'
		},
		{
			barber: 1,
			customers: ['Customer #3'],
			mutex: 0,
			waiting: 1,
			chair: '',
			status: 'Customer #5 leaves the barbershop.'
		},
		{
			barber: 1,
			customers: ['Customer #3'],
			mutex: 1,
			waiting: 1,
			chair: '',
			status: 'Barber sees a customer, locks the mutex and calls the customer.'
		},
		{
			barber: 1,
			customers: [],
			mutex: 0,
			waiting: 0,
			chair: 'Customer #3',
			status: 'Barber walks Customer #3 to the barber\'s chair and releases the mutex.'
		},
		{
			barber: 1,
			customers: [],
			mutex: 0,
			waiting: 0,
			chair: '',
			status: 'Barber finishes cutting Customer #3\'s hair.'
		},
		{
			barber: 1,
			customers: [],
			mutex: 0,
			waiting: 0,
			chair: '',
			status: 'Customer #3 leaves the barbershop.'
		},
		{
			barber: 0,
			customers: [],
			mutex: 0,
			waiting: 0,
			chair: '',
			status: 'Barber sees no customers and instantly falls asleep.'
		},
	]

	// Resets visualization to the first step
	var resetVisualization = function() {
		step = 1;
		loadStep(1);
		$('#chairs').text(chairs);
	}

	// Loads the nth step of the visualization
	var loadStep = function(n) {
		// Update state table values
		$barber.text(function() {
			if (steps[n-1]['barber'] == 0) {
				return 'Sleeping';
			}
			else {
				return 'Awake';
			}
		});
		$customers.text(steps[n-1]['customers'].length);
		$mutex.text(function() {
			if (steps[n-1]['mutex'] == 0) {
				return 'Unlocked';
			}
			else {
				return 'Locked';
			}
		});
		$waiting.text(steps[n-1]['waiting']);
		$status.text(steps[n-1]['status']);
		$barberchair.text(function() {
			if (steps[n-1]['chair']) {
				return steps[n-1]['chair'];
			}
			else {
				return '\xa0';
			}
		});

		// Fill the waiting room table with the customers
		// If a position is empty, put a space instead
		var customers = steps[n-1]['customers'];
		for (var i = 0; i < chairs; i++) {
			$('#chair' + (i+1)).text(function() {
				if (customers[i]) {
					return customers[i];	
				}
				else {
					return '\xa0';
				}
			});
		}

		// Update step number in navigation buttons
		$stepn.text(step + '/' + steps.length);
	}

	// Previous and next step button handlers
	$stepnext.click(function() {
		if (step < steps.length) {
			step += 1;
			loadStep(step);
		}
	});

	$stepprev.click(function() {
		if (step > 1) {
			step -= 1;
			loadStep(step);
		}
	});

	// Reset visualization after document loads
	resetVisualization();
});