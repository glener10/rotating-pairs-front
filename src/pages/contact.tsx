import { SimpleButton } from '@/components/atoms/SimpleButton';
import { SimpleToast } from '@/components/atoms/SimpleToast';
import useResponsive from '@/hooks/useResponsive';
import { TBreakpoint } from '@/interfaces/TBreakpoint';
import * as Label from '@radix-ui/react-label';
import { Box } from '@radix-ui/themes';
import Head from 'next/head';
import { FormEvent, useState } from 'react';

const mappingPaddingMainBox = (breakpoint: TBreakpoint): number => {
  const mapping = {
    desktop: 40,
    tablet: 30,
    mobile: 15,
  };

  return mapping[breakpoint] || 30;
};

export default function Contact(): JSX.Element {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (campo: string, valor: string): void => {
    setFormulario({
      ...formulario,
      [campo]: valor,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log('Enviando e-mail:', formulario);

    setFormulario({
      nome: '',
      email: '',
      mensagem: '',
    });
  };
  const [openToast, setOpenToast] = useState(false);

  const breakpoint = useResponsive();

  const paddingMainBox = mappingPaddingMainBox(breakpoint);

  return (
    <>
      <Head>
        <title>Rotating Pairs</title>
        <meta name="description" content="Random Rotating Pair Generator for Pair Programming" />
        <link rel="icon" href="/iconDrawPairProgramming.svg" />
      </Head>
      <main>
        {openToast && (
          <SimpleToast
            setOpen={setOpenToast}
            open={openToast}
            title={'Well Done!!'}
            description={'Your combinations have been copied'}
          />
        )}
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: paddingMainBox,
          }}
        >
          <form
            onSubmit={(e): void => {
              handleSubmit(e);
            }}
          >
            <div
              style={{
                display: 'flex',
                padding: '0 20px',
                flexWrap: 'wrap',
                gap: 15,
                alignItems: 'center',
                margin: '10px',
              }}
            >
              <Label.Root className="LabelRoot" htmlFor="nome">
                Nome:
              </Label.Root>
              <input
                className="Input"
                type="text"
                id="nome"
                name="nome"
                value={formulario.nome}
                onChange={(e): void => handleChange('nome', e.target.value)}
                required
              />
            </div>

            <div
              style={{
                display: 'flex',
                padding: '0 20px',
                flexWrap: 'wrap',
                gap: 15,
                alignItems: 'center',
                margin: '10px',
              }}
            >
              <Label.Root className="LabelRoot" htmlFor="email">
                E-mail:
              </Label.Root>
              <input
                className="Input"
                type="email"
                id="email"
                name="email"
                value={formulario.email}
                onChange={(e): void => handleChange('email', e.target.value)}
                required
              />
            </div>

            <div
              style={{
                display: 'flex',
                padding: '0 20px',
                flexWrap: 'wrap',
                gap: 15,
                alignItems: 'center',
              }}
            >
              <Label.Root className="LabelRoot" htmlFor="mensagem">
                Mensagem:
              </Label.Root>
              <textarea
                className="Input"
                id="mensagem"
                name="mensagem"
                value={formulario.mensagem}
                onChange={(e): void => handleChange('mensagem', e.target.value)}
                required
              />
            </div>

            <SimpleButton type="submit">Enviar</SimpleButton>
          </form>
        </Box>
      </main>
    </>
  );
}
