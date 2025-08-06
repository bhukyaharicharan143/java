function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("You walked the dog");
      } else {
        reject(new Error("You DIDN'T walk the dog"));
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true; // or false to reject
      if (kitchenCleaned) {
        resolve("Kitchen is clean");
      } else {
        reject(new Error("Kitchen cleaning failed"));
      }
    }, 1500);
  });
}

function doLaundry() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const laundryDone = true; // or false to test rejection
      if (laundryDone) {
        resolve("Laundry done");
      } else {
        reject(new Error("Laundry not done"));
      }
    }, 1500);
  });
}

async function doChores() {
  try {
    const walkMessage = await walkDog();
    console.log(walkMessage);

    const kitchenMessage = await cleanKitchen();
    console.log(kitchenMessage);

    const laundryMessage = await doLaundry();
    console.log(laundryMessage);

    return "All chores completed successfully";
  } catch (err) {
    console.error("Error in chore:", err.message);
    throw err;
  }
}

doChores()
  .then(msg => console.log(msg))
  .catch(err => console.error("Failed chore process:", err.message));
