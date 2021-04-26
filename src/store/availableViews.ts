import { capitalize, mapToHtml } from '../helpers/helperFunctions';
import { View } from '../helpers/view.class';

const PokemonInfoView = (props: Record<string, any>) => {
  const { pokemonName } = props;
  return `
    <div class="pokemon-info">
      <h3 class="pokemon-name">${capitalize(<string>pokemonName)}</h3>
      <h4>Base Stats:</h4>
      ${mapToHtml(props.stats.map((stat: any) => stat.stat.name + ': ' + stat.base_stat))}
    </di>`;
};

export const availableViews = [new View('PokemonInfo', PokemonInfoView)];
