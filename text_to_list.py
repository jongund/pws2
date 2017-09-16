# Utility to make html lists from *

def text_to_list(text):
    html  = ''
    first = ''
    flag = text.find('*') == 0

    if text.find('*'):
        items = text.split

        # list does not start until the first *
        if !flag and len(texts):
            first = texts[0]
            texts = texts[1:]

        html = first + '\n<ul>\n'

        for item in items:
            html += '  <li>' + item + '</li>\n'


    else:
        return text    
