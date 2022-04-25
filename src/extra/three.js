
<!DOCTYPE html>
<html>

  <body>
    <div id="container"></div>
    <script>
      var width = window.innerWidth;
      var height = window.innerHeight;
{/*****************************YEH BANA DIA HIA REACT ME */}
      var stage = new Konva.Stage({
        container: 'container', //<Stage />
        width: width,
        height: height,
      });
{/*****************************YEH BANA DIA HIA REACT ME */}
      var layer = new Konva.Layer();
      stage.add(layer);               //</Layer>
{/*****************************YEH BANA DIA HIA REACT ME */}
//this.statte.text
      var textNode = new Konva.Text({
        text: 'Some text here',
        x: 50,
        y: 80,
        fontSize: 20,
        draggable: true,
        width: 200,
      });

      layer.add(textNode);
      {/*****************************YEH BANA DIA HIA REACT ME */}
//transformer
      var tr = new Konva.Transformer({
        node: textNode,
        enabledAnchors: ['middle-left', 'middle-right'],
        // set minimum width of text
        boundBoxFunc: function (oldBox, newBox) {
          newBox.width = Math.max(30, newBox.width);
          return newBox;
        },
      });
 
{/*****************************YEH BANA DIA HIA REACT ME */}
//onTransformEnd
      textNode.on('transform', function () {
        // reset scale, so only with is changing by transformer
        textNode.setAttrs({
          width: textNode.width() * textNode.scaleX(),
          scaleX: 1,
        });
      });

      layer.add(tr);
   {/*****************************YEH BANA DIA HIA REACT ME */}
//  onDblClick={e => this.handleTextClick(e)}
      textNode.on('dblclick dbltap', () => {
        textNode.hide();
        tr.hide();
       var textPosition = textNode.absolutePosition();
        var areaPosition = {
          x: stage.container().offsetLeft + textPosition.x,
          y: stage.container().offsetTop + textPosition.y,
        };
        {/*****************************YEH BANA DIA HIA REACT ME */}
       var textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.value = textNode.text();
        textarea.style.position = 'absolute';
        textarea.style.top = areaPosition.y + 'px';
        textarea.style.left = areaPosition.x + 'px';
        textarea.style.width = textNode.width() - textNode.padding() * 2 + 'px';
        textarea.style.height = textNode.height() - textNode.padding() * 2 + 5 + 'px';
        textarea.style.fontSize = textNode.fontSize() + 'px';
        textarea.style.border = 'none';
        textarea.style.padding = '0px';
        textarea.style.margin = '0px';
        textarea.style.overflow = 'hidden';
        textarea.style.background = 'none';
        textarea.style.outline = 'none';
        textarea.style.resize = 'none';
        textarea.style.lineHeight = textNode.lineHeight();
        textarea.style.fontFamily = textNode.fontFamily();
        textarea.style.transformOrigin = 'left top';
        textarea.style.textAlign = textNode.align();
        textarea.style.color = textNode.fill();
        textarea.style.transform = transform;

        // reset height
        textarea.style.height = 'auto';
        // after browsers resized it we can set actual value
        textarea.style.height = textarea.scrollHeight + 3 + 'px';

        textarea.focus();

        rotation = textNode.rotation();
        var transform = '';
        if (rotation) {
          transform += 'rotateZ(' + rotation + 'deg)';
        }

        var px = 0;
        // also we need to slightly move textarea on firefox
        // because it jumps a bit
      
        transform += 'translateY(-' + px + 'px)';



        function removeTextarea() {
          textarea.parentNode.removeChild(textarea);
          window.removeEventListener('click', handleOutsideClick);
          textNode.show();
          tr.show();
          tr.forceUpdate();
        }
        {/*****************************YEH BANA DIA HIA REACT ME */}
        function setTextareaWidth(newWidth) {
          if (!newWidth) {
            // set width for placeholder
            newWidth = textNode.placeholder.length * textNode.fontSize();
          }
           textarea.style.width = newWidth + 'px';
        }
                  {/*****************************YEH BANA DIA HIA REACT ME */}
        // onKeyDown={e => this.handleTextareaKeyDown(e)}
        textarea.addEventListener('keydown', function (e) {
          scale = textNode.getAbsoluteScale().x;
          setTextareaWidth(textNode.width() * scale);
          textarea.style.height = 'auto';
          textarea.style.height =textarea.scrollHeight + textNode.fontSize() + 'px';
        });

        function handleOutsideClick(e) {
          if (e.target !== textarea) {
            textNode.text(textarea.value);
            removeTextarea();
          }
        }
        setTimeout(() => {
          window.addEventListener('click', handleOutsideClick);
        });
      });
    </script>
  </body>
</html>