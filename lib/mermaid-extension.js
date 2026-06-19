// Renders [mermaid] blocks as <pre class="mermaid"> so Mermaid.js handles them client-side.
// Replaces asciidoctor-kroki for mermaid diagrams — no external HTTP dependency at build time.
module.exports.register = function (registry) {
  registry.block('mermaid', function () {
    this.onContext(['listing', 'literal'])
    this.process(function (parent, reader, attrs) {
      const content = reader.getLines().join('\n')
      return this.createPassBlock(parent, `<pre class="mermaid">${content}</pre>`, {})
    })
  })
}
