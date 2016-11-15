
'use strict';

class Interactor {

    constructor(context = {}) {
        if (this.constructor === Interactor) throw TypeError("No instantiation allowed, it's an abstract class");
        this.context = context
    }

    invoke() {
        try {
            const fnList = [this.before, this.call, this.after];
            const interable = fn_list.filter((e, i, arr) => { return e != undefined });
            //todo: check as exception
            return interable.reduce((p, fn) => p.then(fn), Promise.resolve())
        }
        catch (e) {
            if (this.rollback) { this.rollback() }
            else { throw e; }
        }

    };

    //before() {}
    call() { throw Error("Not Implimented") }
    //after() { }
    //rollback() { }
}

module.exports.Interactor = Interactor;
