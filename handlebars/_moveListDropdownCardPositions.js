{{#each cards }}
  {{#if (equal id ../currentCardId )}}
    <option selected="selected" value="current">{{inc @index }}</option>
  {{else}}  
    <option value="{{ id }}">{{inc @index }}</option>
  {{/if}}
{{/each }}