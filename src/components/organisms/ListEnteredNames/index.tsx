import { Title } from '@/components/atoms/Title';
import { Name } from '@/components/molecules/Name';
import useResponsive from '@/hooks/useResponsive';
import { Box } from '@radix-ui/themes';

interface ListEnteredNamesProps {
  valuesArray: string[];
  setInputNamesInArray: React.Dispatch<React.SetStateAction<string[]>>;
}

type IBreakpoint = 'desktop' | 'tablet' | 'mobile';

const mappingNumberOfColumnsEnteredNames = (breakpoint: IBreakpoint): number => {
  const mapping = {
    desktop: 350,
    tablet: 200,
    mobile: 100,
  };

  return mapping[breakpoint] || 250;
};

export const ListEnteredNames = (props: ListEnteredNamesProps): JSX.Element => {
  const { valuesArray, setInputNamesInArray } = props;

  const breakpoint = useResponsive();

  const minWidthPerColumn = mappingNumberOfColumnsEnteredNames(breakpoint);
  const numColumns = Math.floor(window.innerWidth / minWidthPerColumn);

  const columns = [];
  for (let i = 0; i < valuesArray.length; i += numColumns) {
    columns.push(valuesArray.slice(i, i + numColumns));
  }

  const removingOneInput = (value: string): void => {
    const index = valuesArray.indexOf(value);
    if (index !== -1) {
      const newArray = [...valuesArray];
      newArray.splice(index, 1);
      setInputNamesInArray(newArray);
    }
  };

  return (
    <Box style={{ width: '100%', display: 'flex', flexDirection: 'column', margin: '8px' }}>
      <Title>
        {'Entered Names ['}
        <strong>{valuesArray.length}</strong>
        {']'}
      </Title>
      <Box
        style={{
          display: 'flex',
          flexWrap: `wrap`,
          gap: '10px',
          alignContent: 'flex-start',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} style={{ flex: `0 0 auto` }}>
            {column.map((value, index) => (
              <Name value={value} onClick={removingOneInput} key={index} />
            ))}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default ListEnteredNames;
