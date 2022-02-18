let counter = {
    value: 0,
    initialValue: 0,
    next: function () {
      this.value++
    },
    previous: function () {
      this.value++
    },
    reset: function () {
      this.value = this.initialValue
    },
    print: function () {
      console.log(this.value)
    }
};


counter.next.bind(counter)()
counter.next()
counter.print.bind(counter)()
counter.reset.bind(counter)()
counter.print()