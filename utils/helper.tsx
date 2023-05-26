const helper = {
  controlModal: (id: string, control: boolean) => {
    const modal = document.getElementById(id) as HTMLInputElement;
    modal.checked = control;
  },

  number: (price: number, prefix?: "Rp") => {
    return (
      (prefix ?? "") +
      " " +
      price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    );
  },

  uuid: () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        // eslint-disable-next-line
        var r = (Math.random() * 16) | 0,
          // eslint-disable-next-line
          v = c == "x" ? r : (r & 0x3) | 0x8;
        // eslint-disable-next-line
        return v.toString(16);
      }
    );
  },

  // convert 2023-05-16 01:58:25 to time only remove detik
  time: (date: string) => {
    return date.split(" ")[1].split(":").slice(0, 2).join(":");
  },

  // convert 2023-05-16 01:58:25 to 16 Mei 2023
  date: (date: string) => {
    if (!date) return "-";
    const month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "Nopember",
      "Desember",
    ];
    const dateSplit = date.split(" ")[0].split("-");
    return `${dateSplit[2]} ${month[parseInt(dateSplit[1]) - 1]} ${
      dateSplit[0]
    }`;
  },
};

export default helper;
