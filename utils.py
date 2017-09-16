# Utility to make html lists from *

def text_to_list(text):
    html  = ''
    first = ''
    flag = text.find('*') == 0

    if text.find('*'):
        items = text.split('*')

        # list does not start until the first *
        if not flag and len(items):
            first = items[0]
            items = items[1:]

        html = first + '\n<ul>\n'

        for item in items:
            html += '  <li>' + item + '</li>\n'

        html += first + '\n</ul>\n'

        return html


    else:
        return text    

def text_to_html(text):
    return text_to_list(text)

def text_to_paragraphs(text):
    html = ''

    items = text.split('\n')

    for item in items:
        item = item.strip()
        if len(item):
          html += '<p style="text-align: left">' + item + '</p>'

    print(html)

    return html    