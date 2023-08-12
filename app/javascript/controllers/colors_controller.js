import { Controller } from "@hotwired/stimulus"

let color = "693535"
let scheme = "monochrome"
const colorsGrid = document.getElementById("colors-grid")

export default class extends Controller {
  static targets = ['selecedColor', 'selectedScheme']

  connect() {
    this.getColorScheme(color, scheme)
  }

  selectScheme(e) {
    scheme = e.target.value
    this.getColorScheme(color, scheme)
  }

  selectColor(e) {
    color = e.target.value.slice(1)
    this.getColorScheme(color, scheme)
  }

  getColorScheme(color, scheme) {
   fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}`)
    .then(response => response.json())
    .then(data => {
      const colorsHexArray = data.colors.map(color => color.hex.value)  
      const colorGridHtml = this.getColorHtml(colorsHexArray)
      this.render(colorGridHtml)
    })
  }

  storeColorScheme() {
    const colorsResponse = this.getColorScheme(color, scheme)
    console.log(colorsResponse)
  }

  getColorHtml(hexArray) {
    let colorHtml = ''
    for (const colorHex of hexArray) {
      colorHtml += `
      <div class="h-screen">
        <div class="px-4 py-5 sm:p-6 h-4/6" style="background-color: ${colorHex}">
        </div>
        <div class="text-center flex justify-center items-center my-auto bg-slate-50 h-1/6">
          <p>${colorHex}</p>
        </div>
      </div>
      `
    }
    return colorHtml
  }

  render(gridHtml) {
    console.log(gridHtml)
    colorsGrid.innerHTML =  gridHtml
  }
}