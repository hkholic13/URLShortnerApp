import React, { useState, useRef, useEffect } from 'react';
import { FormControl, useFormControlContext } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { Box, styled } from '@mui/system';
import clsx from 'clsx';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
import axios from 'axios';
import CopyToClipboard from 'react-copy-to-clipboard';

export default function Form() {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const resultRef = useRef(null);
  console.log(shortenedUrl)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        'accept': 'application/json',
      };

      const params = {
        'api_token': 'lxH0VeqmUrnsOpYRB12yRdC5QU1JkiCEVnFchYX9sXjnd4Oa9gNJuibJRYKC',
      };

      const json_data = {
        'url': url,
        'domain': 'tiny.one',
      };

      const response = await axios.post('https://api.tinyurl.com/create', json_data, { params, headers });

      if (response.status === 200) {
        setShortenedUrl(response.data.data.tiny_url);
        alert(response.data.data.tiny_url)
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        throw new Error('Failed to shorten URL');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  
  return (
    <>
      <Box display="flex" flexDirection="column" height="100vh">
        <FormControl style={{ margin: "10px" }} defaultValue="" required>
          <Label>Shorten a long URL</Label>
          <StyledInput
            placeholder="Paste your URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <HelperText />
          <Toolbar style={{ justifyContent: "center", margin: "10px" }}>
            <Button variant="contained" color="inherit" sx={{ width: "100%" }} onClick={(e)=>handleSubmit(e)}>
              Shorten your URL
            </Button>
          </Toolbar>
        </FormControl>
        <Typography variant="h6" sx={{ color: "white", marginTop: "50px", width: "100%" }} >
            Your Shortened URl is:
        </Typography>
        <Typography p sx={{ color: "white", marginTop: "20px", width: "100%" }} ref={resultRef}>
          {shortenedUrl}
        </Typography>
        
        <CopyToClipboard text={shortenedUrl}>
        <Button variant="contained" color="inherit" sx={{ width: "100%" }} onClick={()=>{alert('Copied to clipboard')}}>
          Copy to Clipboard
        </Button>
  </CopyToClipboard>
      </Box>
    </>
  );
}

const StyledInput = styled(Input)(
  ({ theme }) => `

  .${inputClasses.input} {
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    margin-left: 20px;
    margin-right: 20px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  }
`,
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? 'invalid' : '')}>
      {children}
      {required ? ' *' : ''}
    </p>
  );
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;
  margin-left: 20px;

  &.invalid {
    color: red
  }
`;

const HelperText = styled((props) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
`;

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};
