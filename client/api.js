// making the code work both in the browser and node.js
if (typeof global === 'undefined') {
  global = window;
}

get = (choice) => {
  return global.fetch(`/${choice}`);
};

get.me = (choice) => {
  return global.fetch(`/${choice}`);
};

get.me.a = (choice) => {
  return global.fetch(`/${choice}`);
};

get.me.everything = () => {
  const { food, drink, tv } = {
    food: global.fetch(`/food`),
    drink: global.fetch(`/drink`),
    tv: global.fetch(`/tv`),
  };

  return Promise.all([ food, drink, tv ]);
};

const go = {
  get
};

go.get.me = get.me;
go.get.me.a = get.me.a;
go.get.me.everything = get.me.everything;

const api = {
  get,
  go,
};

// making the code work both in the browser and node.js
if (typeof module !== 'undefined') { module.exports = api; }
if (typeof window !== 'undefined') { window.api = api; }
