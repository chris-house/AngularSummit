Mocks vs stubs
mock is a json object representing an api

stubs - used to cherry pick calls and change the behaviour for a single test
    when to use: when you want to control behavior to favor/avoid a certian path

https://angularsummit.com/s/slides/2017/speaker/Gerard_Sans/advanced_testing_recipes_v4_/ng_summit_testing_recipes.pdf

jasmine
    suites describe('MY COMPONENT',function)
        wrapper for tests
    specs it('should do something', function)
        individual tests
    expectations and matchers
        expect x to equal x
        tobe - ===
        toequal - goes deeper than the first one

when would you use AfterEach?

you can put x infront of describe to ignore a particular test
you can put f infront of describe to only run one suite