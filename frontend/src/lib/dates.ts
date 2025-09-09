/**
 * An instance of `Intl.DateTimeFormat` configured to format dates in the 'en-US' locale.
 * The formatted date includes the year, month, day, and hour, all in two-digit format where applicable.
 *
 * Example output: "06/25/2024, 08 AM"
 * 
**/
export const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'

})