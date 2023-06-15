export const dateTime = (dateString) => {
    const dateObj = new Date(dateString);

    const formattedDate = dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const formattedTime = dateObj.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    const result = `${formattedDate}, ${formattedTime}`;

    return result
}