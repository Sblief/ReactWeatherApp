// function getTempCallback(location, callback) {
// 	callback(undefined, 78);
// 	callback('City not found');
// }


// getTempCallback('Dhaka', function (err, temp) {
// 	if(err){
// 		console.log('error', err);
// 	} else{
// 		console.log('success', temp);
// 	}
// });


// function getPromise(location) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			resolve (79);
// 			reject('City Not Found');
// 		}, 1000);
// 	});
// }


// getPromise('Dhaka').then(function (temp) {
// 	console.log('Promise success', temp);
// }, function (err) {
// 	console.log('promise error', err);
// });


 //Another function promise
 //
 
 function addPromise(a, b) {
 	return new Promise(function (resolve, reject) {
 		if(typeof a === 'number' && typeof b === 'number'){
 			resolve(a+b);
 		} else {
 			reject('A& B need to be numbers');
 		}
 	});
 }


// addPromise(2,3).then(function (sum) {
// 	console.log('success', sum);
// }, function (err) {
// 	console.log('error', err);
// });



addPromise('shibli',3).then(function (sum) {
	console.log('This should not print', sum);
}, function (err) {
	console.log('error', err);
});











