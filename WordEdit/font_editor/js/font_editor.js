
  var viewMode = 1; // WYSIWYG

  function Init()
  {
    iView.document.designMode = 'On';
  }
  
  function selOn(ctrl)
  {
	ctrl.style.borderColor = '#000000';
	ctrl.style.backgroundColor = '#B5BED6';
	ctrl.style.cursor = 'hand';	
  }
  
  function selOff(ctrl)
  {
	ctrl.style.borderColor = '#D6D3CE';  
	ctrl.style.backgroundColor = '#D6D3CE';
  }
  
  function selDown(ctrl)
  {
	ctrl.style.backgroundColor = '#8492B5';
  }
  
  function selUp(ctrl)
  {
    ctrl.style.backgroundColor = '#B5BED6';
  }
    
  function doBold()
  {
	iView.document.execCommand('bold', false, null);
  }

  function doItalic()
  {
	iView.document.execCommand('italic', false, null);
  }

  function doUnderline()
  {
	iView.document.execCommand('underline', false, null);
  }
  
  function doLeft()
  {
    iView.document.execCommand('justifyleft', false, null);
  }

  function doCenter()
  {
    iView.document.execCommand('justifycenter', false, null);
  }

  function doRight()
  {
    iView.document.execCommand('justifyright', false, null);
  }

  function doOrdList()
  {
    iView.document.execCommand('insertorderedlist', false, null);
  }

  function doBulList()
  {
    iView.document.execCommand('insertunorderedlist', false, null);
  }
  
  function doForeCol()
  {
    var fCol = prompt('Enter foreground color', '');
    
    if(fCol != null)
      iView.document.execCommand('forecolor', false, fCol);
  }

  function doBackCol()
  {
    var bCol = prompt('Enter background color', '');
    
    if(bCol != null)
      iView.document.execCommand('backcolor', false, bCol);
  }

  function doLink()
  {
    var link=prompt("Enter the URL for this link:");
    iView.document.execCommand('createlink',false,link);
  }
  
  function doImage()
  {
    var imgSrc = prompt('Enter image location', '');
    
    if(imgSrc != null)    
     iView.document.execCommand('insertimage', false, imgSrc);
  }
  
  function doRule()
  {
    iView.document.execCommand('inserthorizontalrule', false, null);
  }
  
  function doFont(fName)
  {
    if(fName != '')
      iView.document.execCommand('fontname', false, fName);
  }
  function decSize()
  {
     var newSize = iView.document.style.fontSize - 1;
     iView.document.execCommand('fontsize',false, newSize);
     
     
   }
  function doSize(fSize)
  {
    if(fSize != '')
      iView.document.execCommand('fontsize', false, fSize);
  }
  
  function doHead(hType)
  {
    if(hType != '')
    {
      iView.document.execCommand('formatblock', false, hType);  
      doFont(selFont.options[selFont.selectedIndex].value);
    }
  }
  
  function doToggleView()
  {  
    if(viewMode == 1)
    {
      iHTML = iView.document.body.innerHTML;
      iView.document.body.innerText = iHTML;
      
      // Hide all controls
      tblCtrls.style.display = 'none';
      selFont.style.display = 'none';
      selSize.style.display = 'none';
      selHeading.style.display = 'none';
      iView.focus();
      
      viewMode = 2; // Code
    }
    else
    {
      iText = iView.document.body.innerText;
      iView.document.body.innerHTML = iText;
      
      // Show all controls
      tblCtrls.style.display = 'inline';
      selFont.style.display = 'inline';
      selSize.style.display = 'inline';
      selHeading.style.display = 'inline';
      iView.focus();
      
      viewMode = 1; // WYSIWYG
    }
  }
