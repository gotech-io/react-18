const waitForIt = async (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};

const getDataFast = async () => {
  await waitForIt(1000);
  return { data: "I'm so fast!" };
};

const getDataMedium = async () => {
  await waitForIt(2000);
  return { data: "I'm kinda slow!" };
};

const getDataSlow = async () => {
  await waitForIt(3000);
  return { data: "I'm so slow it's incredible!" };
};

const getFakeData = (howMuch) => {
  const items = [];
  for (let i = 0; i < howMuch; i++) {
    items.push({
      id: i,
      name: `Item ${i}`,
      description: `Description ${i}`,
      price: i * 10,
    });
  }
  return items;
};

export { getDataFast, getDataMedium, getDataSlow, getFakeData };
