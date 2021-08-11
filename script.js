axios
  .get(`http://localhost:2000/data`)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });

// 1. Find items in the Meeting Room.
const filterPlacement = {
  room_id: 3,
  name: "Meeting Room",
};

axios
  .get(`http://localhost:2000/data`, {
    params: {
      placement: JSON.stringify(filterPlacement),
    },
  })
  .then((res) => {
    console.log("1", res.data);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });

// 2. Find all electronic devices
axios
  .get(`http://localhost:2000/data`, {
    params: {
      type: "electronic",
    },
  })
  .then((res) => {
    console.log("2", res.data);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });

// 3. Find all the furniture
axios
  .get(`http://localhost:2000/data`, {
    params: {
      type: "furniture",
    },
  })
  .then((res) => {
    console.log("3", res.data);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });

// // 4. Find all items were purchased on 16 Januari 2020.
axios
  .get(`http://localhost:2000/data`, {
    params: {
      purchased_at: 16012020,
    },
  })
  .then((res) => {
    console.log("4", res.data);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });

// 5. Find all items with brown color.
// axios
//   .get(`http://localhost:2000/data`, {
//     params: {
//       tags: "",
//     },
//   })
//   .then((res) => {
//     console.log("5", res.data);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });
