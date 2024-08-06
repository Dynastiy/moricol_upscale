export function currencyFormat(value) {
    if (!value) return ''
    value = Number(value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'NGN'
    })
    return value
  }
  
  export function formatDate(value) {
      let currentDate = new Date(value)
      const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }
      return currentDate.toLocaleDateString('en-US', options)
  }
  
  export function getID(value) {
    const options = value.split("-").join('')
    const ID = options.slice(0,6)
    return ID
  }

  export function splitText(value) {
    const options = value.split("_").join(' ')
    return options
  }

  export function getOrdinalSuffix(index) {
    const suffixes = ["th", "st", "nd", "rd"];
    const v = index % 100;

    return index + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
  }