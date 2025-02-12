function formatReleaseDate(date) {
  
    const dateObj = new Date(date);
    return dateObj.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
};

function formateRating(vote) {
    return vote.toFixed(1);
};

export {formatReleaseDate, formateRating};