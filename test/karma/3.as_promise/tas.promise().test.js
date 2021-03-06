/**
 * Test of Tas.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/tas
 * Released under the MIT License.
 */

describe('as promise: tas.promise()', function(){
	it('should return true', function(done){

		var request = superagent;
		jasmine.getEnv().defaultTimeoutInterval = config.netTimeout;

		tas.promise(function(){
			var url = config.res.a;
			request.get(url).end(this.done);
		});

		tas(function(err, data){
			var exp = true;
			var val = data instanceof Object;
			tester.test('as promise: tas.promise()', tas, exp, val, true);
			expect(val).toBe(exp);
			done();
		});
	});
});
