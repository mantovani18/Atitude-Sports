
// ORIGINAL_PRODUCTS: preserved mapping oldId -> src for migration
const ORIGINAL_PRODUCTS = [{"id": "p4", "src": "img/Arsenal.JPG"},{"id": "p6", "src": "img/Arsenal.JPG"},{"id": "p7", "src": "img/AstonVilla_Vinho.jpg"},{"id": "p8", "src": "img/Athletic Bilbao.jpg"},{"id": "p9", "src": "img/Athletico de Madri Roxa.jpg"},{"id": "p10", "src": "img/Atletico Mineiro Branca.jpg"},{"id": "p12", "src": "img/Bahia.jpg"},{"id": "p13", "src": "img/Barcelona Bege.jpg"},{"id": "p14", "src": "img/Barcelona Retro.jpg"},{"id": "p15", "src": "img/BayerM_PretaCinza.jpg"},{"id": "p16", "src": "img/Bayern M Retro.jpg"},{"id": "p19", "src": "img/Bayern.JPG"},{"id": "p20", "src": "img/Benfica Branca.jpg"},{"id": "p21", "src": "img/Benfica Vermelha.jpg"},{"id": "p22", "src": "img/Boca Juniors.JPG"},{"id": "p23", "src": "img/Borussia_Amarela.jpg"},{"id": "p24", "src": "img/Botafogo Branca.jpg"},{"id": "p25", "src": "img/Botafogo Listrada.jpg"},{"id": "p26", "src": "img/Botafogo Preta.jpg"},{"id": "p27", "src": "img/Botafogo.JPG"},{"id": "p28", "src": "img/Brasil Amarela Jogador.jpg"},{"id": "p29", "src": "img/Brasil Amarela.jpg"},{"id": "p30", "src": "img/Brasil Azul Polo.jpg"},{"id": "p31", "src": "img/Brasil Azul.jpg"},{"id": "p32", "src": "img/Brasil Cinza.jpg"},{"id": "p33", "src": "img/Brasil Preta.jpg"},{"id": "p34", "src": "img/Camarões Verde.jpg"},{"id": "p36", "src": "img/Chelsea Azul.jpg"},{"id": "p37", "src": "img/Chelsea Branca.jpg"},{"id": "p38", "src": "img/Chelsea Preta Retro.jpg"},{"id": "p39", "src": "img/Colo Colo Branca.jpg"},{"id": "p40", "src": "img/Coreia do Sul.jpg"},{"id": "p41", "src": "img/Corinthians Preta.jpg"},{"id": "p42", "src": "img/Corinthians Roxa.jpg"},{"id": "p45", "src": "img/Cruzeiro Azul.jpg"},{"id": "p46", "src": "img/Cruzeiro Branca.jpg"},{"id": "p47", "src": "img/Cruzeiro Feminina.jpg"},{"id": "p48", "src": "img/Manchester City Preta.jpg"},{"id": "p49", "src": "img/Escócia.JPG"},{"id": "p50", "src": "img/Fiorentina Roxa.jpg"},{"id": "p51", "src": "img/Flamengo Azul.jpg"},{"id": "p52", "src": "img/Flamengo Fem Branca.jpg"},{"id": "p54", "src": "img/Flamengo Ilusão Ótica.jpg"},{"id": "p55", "src": "img/Flamengo Vermelha jogo.jpg"},{"id": "p56", "src": "img/Flamengo Vermelha Listrada.JPG"},{"id": "p57", "src": "img/Flamengo Vermelha.jpg"},{"id": "p59", "src": "img/Fluminense Branca.jpg"},{"id": "p60", "src": "img/Ghana Amarela.jpg"},{"id": "p61", "src": "img/Ghana Branca.jpg"},{"id": "p62", "src": "img/Gremio_AzulBranca.JPG"},{"id": "p63", "src": "img/Grêmio.jpg"},{"id": "p64", "src": "img/Holanda Azul.jpg"},{"id": "p65", "src": "img/Holanda Preta.jpg"},{"id": "p66", "src": "img/Inglaterra Preta.jpg"},{"id": "p67", "src": "img/Inter de Milão.JPG"},{"id": "p68", "src": "img/Inter Miami Azul Claro.jpg"},{"id": "p69", "src": "img/InterDMilao_BrancaAzulClara.jpg"},{"id": "p70", "src": "img/Internacional Branca.jpg"},{"id": "p71", "src": "img/Internacional Preta.jpg"},{"id": "p72", "src": "img/Italia Azul.jpg"},{"id": "p73", "src": "img/Italia Versace Azul.jpg"},{"id": "p74", "src": "img/Italia Versace Preta.jpg"},{"id": "p75", "src": "img/Italia Versace.jpg"},{"id": "p76", "src": "img/Japão Onda Azul.jpg"},{"id": "p77", "src": "img/Japão.jpg"},{"id": "p78", "src": "img/Japão_GokuBranca.jpg"},{"id": "p79", "src": "img/Juventus Branca.jpg"},{"id": "p80", "src": "img/Koea Do Sul Vermelha.jpg"},{"id": "p81", "src": "img/Lazio Azul Claro.jpg"},{"id": "p82", "src": "img/Lazio Branca.jpg"},{"id": "p83", "src": "img/Lazio Comemorativa 125 Anos.jpg"},{"id": "p84", "src": "img/Lazio_Branca.jpg"},{"id": "p85", "src": "img/Lepizig_Branca.jpg"},{"id": "p86", "src": "img/Liverpool verde.jpg"},{"id": "p87", "src": "img/Liverpool Vermelha.jpg"},{"id": "p88", "src": "img/Lyon Azul.jpg"},{"id": "p89", "src": "img/Manchester United Preta.jpg"},{"id": "p90", "src": "img/Manchester United T3 Tezos.jpg"},{"id": "p91", "src": "img/Marrocos Branca.jpg"},{"id": "p92", "src": "img/Milan Branca.jpg"},{"id": "p93", "src": "img/Napoli Azul.jpg"},{"id": "p96", "src": "img/Olympique Marseille.jpg"},{"id": "p97", "src": "img/Palmeiras_FemininaBranca.JPG"},{"id": "p98", "src": "img/Paris Azul.jpg"},{"id": "p99", "src": "img/Paris.JPG"},{"id": "p100", "src": "img/Porto_Rosa.jpg"},{"id": "p102", "src": "img/Real Betis Verde.jpg"},{"id": "p103", "src": "img/Real Madrid Azul.jpg"},{"id": "p104", "src": "img/RealMadri_BrancaListrada.JPG"},{"id": "p105", "src": "img/Roma Branca.jpg"},{"id": "p112", "src": "img/Sporting.jpg"},{"id": "p115", "src": "img/São Paulo.JPG"},{"id": "p117", "src": "img/Totenham_Branca.jpg"},{"id": "p118", "src": "img/Totenham_Branca.jpg"},{"id": "p120", "src": "img/Valencia Vermelha.jpg"},{"id": "p121", "src": "img/Vasco Branca.jpg"},{"id": "p123", "src": "img/West Ham Vinho.jpg"},{"id": "p124", "src": "img/Wolverhampton.jpg"}];


const PRODUCTS = [
{ id: 'p1', name: 'Arsenal', team: 'Arsenal', league: '', type: 'image', src: 'img/Arsenal.JPG' },
{ id: 'p3', name: 'AstonVilla_Vinho', team: 'AstonVilla_Vinho', league: '', type: 'image', src: 'img/AstonVilla_Vinho.jpg' },
{ id: 'p4', name: 'Athletic Bilbao', team: 'Athletic', league: '', type: 'image', src: 'img/Athletic Bilbao.jpg' },
{ id: 'p5', name: 'Athletico de Madri Roxa', team: 'Athletico', league: '', type: 'image', src: 'img/Athletico de Madri Roxa.jpg' },
{ id: 'p6', name: 'Atletico Mineiro Branca', team: 'Atletico', league: '', type: 'image', src: 'img/Atletico Mineiro Branca.jpg' },
{ id: 'p7', name: 'Bahia', team: 'Bahia', league: '', type: 'image', src: 'img/Bahia.jpg' },
{ id: 'p8', name: 'Barcelona Bege', team: 'Barcelona', league: '', type: 'image', src: 'img/Barcelona Bege.jpg' },
{ id: 'p9', name: 'Barcelona Retro', team: 'Barcelona', league: '', type: 'image', src: 'img/Barcelona Retro.jpg' },
{ id: 'p10', name: 'BayerM_PretaCinza', team: 'BayerM_PretaCinza', league: '', type: 'image', src: 'img/BayerM_PretaCinza.jpg' },
{ id: 'p11', name: 'Bayern M Retro', team: 'Bayern', league: '', type: 'image', src: 'img/Bayern M Retro.jpg' },
{ id: 'p12', name: 'Bayern', team: 'Bayern', league: '', type: 'image', src: 'img/Bayern.JPG' },
{ id: 'p13', name: 'Benfica Branca', team: 'Benfica', league: '', type: 'image', src: 'img/Benfica Branca.jpg' },
{ id: 'p14', name: 'Benfica Vermelha', team: 'Benfica', league: '', type: 'image', src: 'img/Benfica Vermelha.jpg' },
{ id: 'p15', name: 'Boca Juniors', team: 'Boca', league: '', type: 'image', src: 'img/Boca Juniors.JPG' },
{ id: 'p16', name: 'Borussia_Amarela', team: 'Borussia_Amarela', league: '', type: 'image', src: 'img/Borussia_Amarela.jpg' },
{ id: 'p17', name: 'Botafogo Branca', team: 'Botafogo', league: '', type: 'image', src: 'img/Botafogo Branca.jpg' },
{ id: 'p18', name: 'Botafogo Listrada', team: 'Botafogo', league: '', type: 'image', src: 'img/Botafogo Listrada.jpg' },
{ id: 'p19', name: 'Botafogo Preta', team: 'Botafogo', league: '', type: 'image', src: 'img/Botafogo Preta.jpg' },
{ id: 'p20', name: 'Botafogo', team: 'Botafogo', league: '', type: 'image', src: 'img/Botafogo.JPG' },
{ id: 'p21', name: 'Brasil Amarela Jogador', team: 'Brasil', league: '', type: 'image', src: 'img/Brasil Amarela Jogador.jpg' },
{ id: 'p22', name: 'Brasil Amarela', team: 'Brasil', league: '', type: 'image', src: 'img/Brasil Amarela.jpg' },
{ id: 'p23', name: 'Brasil Azul Polo', team: 'Brasil', league: '', type: 'image', src: 'img/Brasil Azul Polo.jpg' },
{ id: 'p24', name: 'Brasil Azul', team: 'Brasil', league: '', type: 'image', src: 'img/Brasil Azul.jpg' },
{ id: 'p25', name: 'Brasil Cinza', team: 'Brasil', league: '', type: 'image', src: 'img/Brasil Cinza.jpg' },
{ id: 'p26', name: 'Brasil Preta', team: 'Brasil', league: '', type: 'image', src: 'img/Brasil Preta.jpg' },
{ id: 'p27', name: 'Camarões Verde', team: 'Camarões', league: '', type: 'image', src: 'img/Camarões Verde.jpg' },
{ id: 'p28', name: 'Chelsea Azul', team: 'Chelsea', league: '', type: 'image', src: 'img/Chelsea Azul.jpg' },
{ id: 'p29', name: 'Chelsea Branca', team: 'Chelsea', league: '', type: 'image', src: 'img/Chelsea Branca.jpg' },
{ id: 'p30', name: 'Chelsea Preta Retro', team: 'Chelsea', league: '', type: 'image', src: 'img/Chelsea Preta Retro.jpg' },
{ id: 'p31', name: 'Colo Colo Branca', team: 'Colo', league: '', type: 'image', src: 'img/Colo Colo Branca.jpg' },
{ id: 'p32', name: 'Coreia do Sul', team: 'Coreia', league: '', type: 'image', src: 'img/Coreia do Sul.jpg' },
{ id: 'p33', name: 'Corinthians Preta', team: 'Corinthians', league: '', type: 'image', src: 'img/Corinthians Preta.jpg' },
{ id: 'p34', name: 'Corinthians Roxa', team: 'Corinthians', league: '', type: 'image', src: 'img/Corinthians Roxa.jpg' },
{ id: 'p35', name: 'Cruzeiro Azul', team: 'Cruzeiro', league: '', type: 'image', src: 'img/Cruzeiro Azul.jpg' },
{ id: 'p36', name: 'Cruzeiro Branca', team: 'Cruzeiro', league: '', type: 'image', src: 'img/Cruzeiro Branca.jpg' },
{ id: 'p37', name: 'Cruzeiro Feminina', team: 'Cruzeiro', league: '', type: 'image', src: 'img/cruzeiro_fem.jpg' },
{ id: 'p38', name: 'Manchester City Preta', team: 'Manchester City', league: '', type: 'image', src: 'img/Manchester City Preta.jpg' },
{ id: 'p39', name: 'Escócia', team: 'Escócia', league: '', type: 'image', src: 'img/Escócia.JPG' },
{ id: 'p40', name: 'Fiorentina Roxa', team: 'Fiorentina', league: '', type: 'image', src: 'img/Fiorentina Roxa.jpg' },
{ id: 'p41', name: 'Flamengo Azul', team: 'Flamengo', league: '', type: 'image', src: 'img/Flamengo Azul.jpg' },
{ id: 'p42', name: 'Flamengo Fem Branca', team: 'Flamengo', league: '', type: 'image', src: 'img/Flamengo Fem Branca.jpg' },
{ id: 'p43', name: 'Flamengo Ilusão Ótica', team: 'Flamengo', league: '', type: 'image', src: 'img/Flamengo Ilusão Ótica.jpg' },
{ id: 'p44', name: 'Flamengo Vermelha jogo', team: 'Flamengo', league: '', type: 'image', src: 'img/Flamengo Vermelha jogo.jpg' },
{ id: 'p45', name: 'Flamengo Vermelha Listrada', team: 'Flamengo', league: '', type: 'image', src: 'img/Flamengo Vermelha Listrada.JPG' },
{ id: 'p46', name: 'Flamengo Vermelha', team: 'Flamengo', league: '', type: 'image', src: 'img/Flamengo Vermelha.jpg' },
{ id: 'p47', name: 'Fluminense Branca', team: 'Fluminense', league: '', type: 'image', src: 'img/Fluminense Branca.jpg' },
{ id: 'p48', name: 'Ghana Amarela', team: 'Ghana', league: '', type: 'image', src: 'img/Ghana Amarela.jpg' },
{ id: 'p49', name: 'Ghana Branca', team: 'Ghana', league: '', type: 'image', src: 'img/Ghana Branca.jpg' },
{ id: 'p50', name: 'Gremio_AzulBranca', team: 'Gremio_AzulBranca', league: '', type: 'image', src: 'img/Gremio_AzulBranca.JPG' },
{ id: 'p51', name: 'Grêmio', team: 'Grêmio', league: '', type: 'image', src: 'img/Grêmio.jpg' },
{ id: 'p52', name: 'Holanda Azul', team: 'Holanda', league: '', type: 'image', src: 'img/Holanda Azul.jpg' },
{ id: 'p53', name: 'Holanda Preta', team: 'Holanda', league: '', type: 'image', src: 'img/Holanda Preta.jpg' },
{ id: 'p54', name: 'Inglaterra Preta', team: 'Inglaterra', league: '', type: 'image', src: 'img/Inglaterra Preta.jpg' },
{ id: 'p55', name: 'Inter de Milão', team: 'Inter', league: '', type: 'image', src: 'img/Inter de Milão.JPG' },
{ id: 'p56', name: 'Inter Miami Azul Claro', team: 'Inter', league: '', type: 'image', src: 'img/Inter Miami Azul Claro.jpg' },
{ id: 'p57', name: 'InterDMilao_BrancaAzulClara', team: 'InterDMilao_BrancaAzulClara', league: '', type: 'image', src: 'img/InterDMilao_BrancaAzulClara.jpg' },
{ id: 'p58', name: 'Internacional Branca', team: 'Internacional', league: '', type: 'image', src: 'img/Internacional Branca.jpg' },
{ id: 'p59', name: 'Internacional Preta', team: 'Internacional', league: '', type: 'image', src: 'img/Internacional Preta.jpg' },
{ id: 'p60', name: 'Italia Azul', team: 'Italia', league: '', type: 'image', src: 'img/Italia Azul.jpg' },
{ id: 'p61', name: 'Italia Versace Azul', team: 'Italia', league: '', type: 'image', src: 'img/Italia Versace Azul.jpg' },
{ id: 'p62', name: 'Italia Versace Preta', team: 'Italia', league: '', type: 'image', src: 'img/Italia Versace Preta.jpg' },
{ id: 'p63', name: 'Italia Versace', team: 'Italia', league: '', type: 'image', src: 'img/Italia Versace.jpg' },
{ id: 'p64', name: 'Japão Onda Azul', team: 'Japão', league: '', type: 'image', src: 'img/Japão Onda Azul.jpg' },
{ id: 'p65', name: 'Japão', team: 'Japão', league: '', type: 'image', src: 'img/Japão.jpg' },
{ id: 'p66', name: 'Japão_GokuBranca', team: 'Japão_GokuBranca', league: '', type: 'image', src: 'img/Japão_GokuBranca.jpg' },
{ id: 'p67', name: 'Juventus Branca', team: 'Juventus', league: '', type: 'image', src: 'img/Juventus Branca.jpg' },
{ id: 'p68', name: 'Coreia do Sul Vermelha', team: 'Coreia do Sul', league: '', type: 'image', src: 'img/Koea Do Sul Vermelha.jpg' },
{ id: 'p69', name: 'Lazio Azul Claro', team: 'Lazio', league: '', type: 'image', src: 'img/Lazio Azul Claro.jpg' },
{ id: 'p70', name: 'Lazio Branca', team: 'Lazio', league: '', type: 'image', src: 'img/Lazio Branca.jpg' },
{ id: 'p71', name: 'Lazio Comemorativa 125 Anos', team: 'Lazio', league: '', type: 'image', src: 'img/Lazio Comemorativa 125 Anos.jpg' },
{ id: 'p72', name: 'Lazio_Branca', team: 'Lazio_Branca', league: '', type: 'image', src: 'img/Lazio_Branca.jpg' },
{ id: 'p73', name: 'Leipzig Branca', team: 'Leipzig', league: '', type: 'image', src: 'img/Lepizig_Branca.jpg' },
{ id: 'p74', name: 'Liverpool verde', team: 'Liverpool', league: '', type: 'image', src: 'img/Liverpool verde.jpg' },
{ id: 'p75', name: 'Liverpool Vermelha', team: 'Liverpool', league: '', type: 'image', src: 'img/Liverpool Vermelha.jpg' },
{ id: 'p76', name: 'Lyon Azul', team: 'Lyon', league: '', type: 'image', src: 'img/Lyon Azul.jpg' },
{ id: 'p77', name: 'Manchester United Preta', team: 'Manchester', league: '', type: 'image', src: 'img/Manchester United Preta.jpg' },
{ id: 'p78', name: 'Manchester United T3 Tezos', team: 'Manchester', league: '', type: 'image', src: 'img/Manchester United T3 Tezos.jpg' },
{ id: 'p79', name: 'Marrocos Branca', team: 'Marrocos', league: '', type: 'image', src: 'img/Marrocos Branca.jpg' },
{ id: 'p80', name: 'Milan Branca', team: 'Milan', league: '', type: 'image', src: 'img/Milan Branca.jpg' },
{ id: 'p81', name: 'Napoli Azul', team: 'Napoli', league: '', type: 'image', src: 'img/Napoli Azul.jpg' },
{ id: 'p82', name: 'Olympique Marseille', team: 'Olympique', league: '', type: 'image', src: 'img2/olympique.jpg' },
{ id: 'p83', name: 'Palmeiras_FemininaBranca', team: 'Palmeiras_FemininaBranca', league: '', type: 'image', src: 'img/Palmeiras_FemininaBranca.JPG' },
{ id: 'p86', name: 'Porto_Rosa', team: 'Porto_Rosa', league: '', type: 'image', src: 'img/Porto_Rosa.jpg' },
{ id: 'p87', name: 'Real Betis Verde', team: 'Real', league: '', type: 'image', src: 'img/Real Betis Verde.jpg' },
{ id: 'p88', name: 'Real Madrid Azul', team: 'Real', league: '', type: 'image', src: 'img/Real Madrid Azul.jpg' },
{ id: 'p89', name: 'Real Madrid Branca Listrada', team: 'Real Madrid', league: '', type: 'image', src: 'img/RealMadri_BrancaListrada.JPG' },
{ id: 'p90', name: 'Roma Branca', team: 'Roma', league: '', type: 'image', src: 'img/Roma Branca.jpg' },
{ id: 'p91', name: 'Sporting', team: 'Sporting', league: '', type: 'image', src: 'img/Sporting.jpg' },
{ id: 'p92', name: 'São Paulo', team: 'São Paulo', league: '', type: 'image', src: 'infantil.img/sao_paulo.jpg' },
{ id: 'p93', name: 'Tottenham Branca', team: 'Tottenham', league: '', type: 'image', src: 'img/Totenham_Branca.jpg' },
{ id: 'p94', name: 'Tottenham Branca (alt)', team: 'Tottenham', league: '', type: 'image', src: 'img/Totenham_Branca.jpg' },
{ id: 'p95', name: 'Valencia Vermelha', team: 'Valencia', league: '', type: 'image', src: 'img/Valencia Vermelha.jpg' },
{ id: 'p96', name: 'Vasco Branca', team: 'Vasco', league: '', type: 'image', src: 'img/Vasco Branca.jpg' },
{ id: 'p97', name: 'West Ham Vinho', team: 'West', league: '', type: 'image', src: 'img/West Ham Vinho.jpg' },
{ id: 'p98', name: 'Wolverhampton', team: 'Wolverhampton', league: '', type: 'image', src: 'img/Wolverhampton.jpg' },
{ id: 'p99', name: 'Ajax', team: 'Ajax', league: '', type: 'image', src: 'img2/ajax.jpg' },
{ id: 'p100', name: 'Alemanha', team: 'Alemanha', league: '', type: 'image', src: 'img2/alemanha.jpg' },
{ id: 'p101', name: 'Arsenal', team: 'Arsenal', league: '', type: 'image', src: 'img2/arsenal.jpg' },
{ id: 'p102', name: 'Athletico Bilbao', team: 'At', league: '', type: 'image', src: 'img2/athletico_bilbao.jpg' },
{ id: 'p103', name: 'Bahia Vermelha', team: 'Bahia Vermelha', league: '', type: 'image', src: 'img2/bahia_vermelha.jpg' },
{ id: 'p104', name: 'Benfica', team: 'Benfica', league: '', type: 'image', src: 'img2/benfica.jpg' },
{ id: 'p105', name: 'Celtic', team: 'Celtic', league: '', type: 'image', src: 'img2/celtic.jpg' },
{ id: 'p106', name: 'Cruzeiro Fem', team: 'Cruzeiro', league: '', type: 'image', src: 'img2/cruzeiro_fem.jpg' },
{ id: 'p107', name: 'Corinthians Fem', team: 'Corinthians', league: '', type: 'image', src: 'img2/corinthians_fem.jpg' },
{ id: 'p108', name: 'Flamengo Fem', team: 'Flamengo', league: '', type: 'image', src: 'img2/flamengo_fem.jpg' },
{ id: 'p109', name: 'Fluminense Branca', team: 'Fluminense', league: '', type: 'image', src: 'img2/fluminense_branca.jpg' },
{ id: 'p110', name: 'Liverpool Preta', team: 'Liverpool', league: '', type: 'image', src: 'img2/liverpool_preta.jpg' },
{ id: 'p111', name: 'Manchester United', team: 'Manchester United', league: '', type: 'image', src: 'img2/manchester_united.jpg' },
{ id: 'p112', name: 'Marrocos', team: 'Marrocos', league: '', type: 'image', src: 'img2/marrocos.jpg' },
{ id: 'p113', name: 'New Castle Branca', team: 'New Castle', league: '', type: 'image', src: 'img2/new_castle_branca.jpg' },
{ id: 'p114', name: 'New Castle', team: 'New Castle', league: '', type: 'image', src: 'img2/new_castle.jpg' },
{ id: 'p115', name: 'Olympique Preta', team: 'Olympique', league: '', type: 'image', src: 'img2/olympique_preta.jpg' },
{ id: 'p116', name: 'Olympique', team: 'Olympique', league: '', type: 'image', src: 'img2/olympique.jpg' },
{ id: 'p117', name: 'Psg Vermelha', team: 'Psg', league: '', type: 'image', src: 'img2/psg_vermelha.jpg' },
{ id: 'p118', name: 'PSG', team: 'Psg', league: '', type: 'image', src: 'img2/psg.jpg' },
{ id: 'p119', name: 'Psv', team: 'Psv', league: '', type: 'image', src: 'img2/psv.jpg' },
{ id: 'p120', name: 'Real Madrid Preta', team: 'Real Madrid', league: '', type: 'image', src: 'img2/real_madrid_preta.jpg' },
{ id: 'p121', name: 'Roma Vermelha', team: 'Roma', league: '', type: 'image', src: 'img2/roma_vermelha.jpg' },
{ id: 'p122', name: 'Santos Fem', team: 'Santos', league: '', type: 'image', src: 'img2/santos_fem.jpg' },
{ id: 'p123', name: 'Santos', team: 'Santos', league: '', type: 'image', src: 'img2/santos.jpg' },
{ id: 'p124', name: 'São Paulo Fem', team: 'São Paulo', league: '', type: 'image', src: 'img2/sao_paulo_fem.jpg' },
{ id: 'p125', name: 'Sport Recife', team: 'Sport Recife', league: '', type: 'image', src: 'img2/sport_recife.jpg' },
{ id: 'p126', name: 'Sporting', team: 'Sporting', league: '', type: 'image', src: 'img2/sporting.jpg' },
{ id: 'p127', name: 'Tigres UANL', team: 'Tigres UANL', league: '', type: 'image', src: 'img2/tigres_uanl.jpg' },
{ id: 'p128', name: 'Tigres', team: 'Tigres', league: '', type: 'image', src: 'img2/tigres.jpg' },
{ id: 'p129', name: 'VilaReal', team: 'VilaReal', league: '', type: 'image', src: 'img2/vilareal.jpg' }
];

// Map normalized paths -> actual filenames found on disk.
// This mapping was generated from the repository image folders to ensure
// each product points to an existing file (preserves original filename case).
const SRC_MAP = {
  "img/bayern.jpg":"img/Bayern.jpg",
  "img/italia_versace_preta.jpg":"img/italia_versace_preta.jpg",
  "img/celtic.jpg":"img/Celtic.jpg",
  "img/lepizig_branca.jpg":"img/Lepizig_Branca.jpg",
  "img/marrocos_branca.jpg":"img/marrocos_branca.jpg",
  "infantil.img/cruzeiro_branca.jpg":"infantil.img/cruzeiro_branca.jpg",
  "img2/marrocos.jpg":"img2/Marrocos.jpg",
  "img/barcelona_bege.jpg":"img/barcelona_bege.jpg",
  "img/italia_versace.jpg":"img/italia_versace.jpg",
  "img/lazio_azul_claro.jpg":"img/lazio_azul_claro.jpg",
  "img/fluminense_branca.jpg":"img/fluminense_branca.jpg",
  "img/roma_vermelha.jpg":"img/roma_vermelha.jpg",
  "img/italia_versace_azul.jpg":"img/italia_versace_azul.jpg",
  "img2/new_castle.jpg":"img2/new_castle.jpg",
  "infantil.img/real_madrid_preta.jpg":"infantil.img/real_madrid_preta.jpg",
  "bermudas.img/nike_preto_detalhe_branco.jpg":"bermudas.img/nike_preto_detalhe_branco.jpg",
  "img2/new_castle_branca.jpg":"img2/new_castle_branca.jpg",
  "img2/real_madrid_preta.jpg":"img2/real_madrid_preta.jpg",
  "img/interdmilao_brancaazulclara.jpg":"img/InterDMilao_BrancaAzulClara.jpg",
  "img/internacional_preta.jpg":"img/internacional_preta.jpg",
  "img2/psg_vermelha.jpg":"img2/psg_vermelha.jpg",
  "infantil.img/sao_paulo_branca.jpg":"infantil.img/sao_paulo_branca.jpg",
  "img2/cruzeiro_fem.jpg":"img2/cruzeiro_fem.jpg",
  "img/palmeiras_femininabranca.jpg":"img/Palmeiras_FemininaBranca.jpg",
  "img/holanda_preta.jpg":"img/holanda_preta.jpg",
  "infantil.img/manchester_united.jpg":"infantil.img/manchester_united.jpg",
  "img/roma_laranja.jpg":"img/roma_laranja.jpg",
  "img2/sao_paulo_fem.jpg":"img2/sao_paulo_fem.jpg",
  "img/brasil_cinza.jpg":"img/brasil_cinza.jpg",
  "img/flamengo_vermelha.jpg":"img/flamengo_vermelha.jpg",
  "img2/santos.jpg":"img2/Santos.jpg",
  "img/corinthians_preta.jpg":"img/corinthians_preta.jpg",
  "img2/alemanha.jpg":"img2/Alemanha.jpg",
  "img/flamengo_vermelha_listrada.jpg":"img/flamengo_vermelha_listrada.jpg",
  "img/gremio.jpg":"img/gremio.jpg",
  "img/chelsea_preta_retro.jpg":"img/chelsea_preta_retro.jpg",
  "img2/tigres_uanl.jpg":"img2/tigres_uanl.jpg",
  "img/gremio_azulbranca.jpg":"img/Gremio_AzulBranca.jpg",
  "img/liverpool_verde.jpg":"img/liverpool_verde.jpg",
  "img/liverpool_vermelha.jpg":"img/liverpool_vermelha.jpg",
  "img/corinthians_roxa.jpg":"img/corinthians_roxa.jpg",
  "infantil.img/sao_paulo_vermelho.jpg":"infantil.img/sao_paulo_vermelho.jpg",
  "img/colo_colo_branca.jpg":"img/colo_colo_branca.jpg",
  "bermudas.img/nike_preto.jpg":"bermudas.img/nike_preto.jpg",
  "img/valencia_vermelha.jpg":"img/valencia_vermelha.jpg",
  "img2/olympique_preta.jpg":"img2/olympique_preta.jpg",
  "img2/manchester_united.jpg":"img2/manchester_united.jpg",
  "img/atletico_mineiro_branca.jpg":"img/atletico_mineiro_branca.jpg",
  "img/barcelona_retro.jpg":"img/barcelona_retro.jpg",
  "img/flamengo_vermelha_jogo.jpg":"img/flamengo_vermelha_jogo.jpg",
  "img/lazio_comemorativa_125_anos.jpg":"img/lazio_comemorativa_125_anos.jpg",
  "img2/santos_fem.jpg":"img2/santos_fem.jpg",
  "img/real_madrid_preta.jpg":"img/real_madrid_preta.jpg",
  "img2/flamengo_fem.jpg":"img2/flamengo_fem.jpg",
  "infantil.img/internacional_vermelho.jpg":"infantil.img/internacional_vermelho.jpg",
  "img/bahia.jpg":"img/Bahia.jpg",
  "img2/fluminense_branca.jpg":"img2/fluminense_branca.jpg",
  "img/wolverhampton.jpg":"img/Wolverhampton.jpg",
  "img/athletico_bilbao.jpg":"img/athletico_bilbao.jpg",
  "img/chelsea_azul.jpg":"img/chelsea_azul.jpg",
  "img/japao_onda_azul.jpg":"img/japao_onda_azul.jpg",
  "img/chelsea_branca.jpg":"img/chelsea_branca.jpg",
  "img2/ajax.jpg":"img2/Ajax.jpg",
  "img2/athletico_bilbao.jpg":"img2/athletico_bilbao.jpg",
  "infantil.img/sao_paulo1.jpg":"infantil.img/sao_paulo1.jpg",
  "img/brasil_azul.jpg":"img/brasil_azul.jpg",
  "img/ghana_amarela.jpg":"img/ghana_amarela.jpg",
  "img/flamengo_azul.jpg":"img/flamengo_azul.jpg",
  "bermudas.img/nike_cinza_reflexo.jpg":"bermudas.img/nike_cinza_reflexo.jpg",
  "img/manchester_city_preta.jpg":"img/manchester_city_preta.jpg",
  "img/flamengo_fem.jpg":"img/flamengo_fem.jpg",
  "img/arsenal.jpg":"img/Arsenal.jpg",
  "img2/sporting.jpg":"img2/Sporting.jpg",
  "img/bayern_m_retro.jpg":"img/bayern_m_retro.jpg",
  "img/porto_rosa.jpg":"img/Porto_Rosa.jpg",
  "img2/celtic.jpg":"img2/Celtic.jpg",
  "bermudas.img/nike_preto_faixa_branca.jpg":"bermudas.img/nike_preto_faixa_branca.jpg",
  "img/flamengo_ilusao_otica.jpg":"img/flamengo_ilusao_otica.jpg",
  "img/internacional_branca.jpg":"img/internacional_branca.jpg",
  "img/inglaterra_preta.jpg":"img/inglaterra_preta.jpg",
  "img2/arsenal.jpg":"img2/Arsenal.jpg",
  "infantil.img/corinthians.jpg":"infantil.img/corinthians.jpg",
  "infantil.img/botafogo.jpg":"infantil.img/botafogo.jpg",
  "infantil.img/fluminense.jpg":"infantil.img/fluminense.jpg",
  "img/fiorentina_roxa.jpg":"img/fiorentina_roxa.jpg",
  "img2/bahia_vermelha.jpg":"img2/bahia_vermelha.jpg",
  "img/lazio_branca.jpg":"img/Lazio Branca.jpg",
  "infantil.img/inter_miami.jpg":"infantil.img/inter_miami.jpg",
  "bermudas.img/nike_laranja.jpg":"bermudas.img/nike_laranja.jpg",
  "img/camaroes_verde.jpg":"img/camaroes_verde.jpg",
  "img/botafogo_listrada.jpg":"img/botafogo_listrada.jpg",
  "img/boca_juniors.jpg":"img/boca_juniors.jpg",
  "infantil.img/real_madrid.jpg":"infantil.img/real_madrid.jpg",
  "bermudas.img/nike_preto_reflexo1.jpg":"bermudas.img/nike_preto_reflexo1.jpg",
  "img2/olympique.jpg":"img2/Olympique.jpg",
  "img/athletic_bilbao.jpg":"img/athletic_bilbao.jpg",
  "img/athletico_de_madri_roxa.jpg":"img/athletico_de_madri_roxa.jpg",
  "bermudas.img/nike_preto_branco.jpg":"bermudas.img/nike_preto_branco.jpg",
  "img/inter_de_milao.jpg":"img/inter_de_milao.jpg",
  "img/logoatitudesports.jpeg":"img/LogoAtitudeSports.jpeg",
  "img/brasil_preta.jpg":"img/brasil_preta.jpg",
  "bermudas.img/nike_verde.jpg":"bermudas.img/nike_verde.jpg",
  "img2/benfica.jpg":"img2/Benfica.jpg",
  "img/vasco_branca.jpg":"img/vasco_branca.jpg",
  "img/benfica_vermelha.jpg":"img/benfica_vermelha.jpg",
  "img/real_betis_verde.jpg":"img/real_betis_verde.jpg",
  "img/brasil_amarela.jpg":"img/brasil_amarela.jpg",
  "img/escocia.jpg":"img/escocia.jpg",
  "bermudas.img/nike_verde_agua.jpg":"bermudas.img/nike_verde_agua.jpg",
  "infantil.img/psg.jpg":"infantil.img/psg.jpg",
  "img/cruzeiro_fem.jpg":"img/cruzeiro_fem.jpg",
  "img/real_madrid_azul.jpg":"img/real_madrid_azul.jpg",
  "img/corinthians_fem.jpg":"img/corinthians_fem.jpg",
  "infantil.img/atletico_mineiro.jpg":"infantil.img/atletico_mineiro.jpg",
  "img/japao_gokubranca.jpg":"img/japao_gokubranca.jpg",
  "img/liverpool_preta.jpg":"img/liverpool_preta.jpg",
  "bermudas.img/nike_preto_reflexo.jpg":"bermudas.img/nike_preto_reflexo.jpg",
  "img/flamengo_fem_branca.jpg":"img/flamengo_fem_branca.jpg",
  "img2/tigres.jpg":"img2/Tigres.jpg",
  "img/botafogo_branca.jpg":"img/botafogo_branca.jpg",
  "img/lyon_azul.jpg":"img/lyon_azul.jpg",
  "img/napoli_azul.jpg":"img/napoli_azul.jpg",
  "img/holanda_azul.jpg":"img/holanda_azul.jpg",
  "bermudas.img/nike_branco.jpg":"bermudas.img/nike_branco.jpg",
  "img/milan_branca.jpg":"img/milan_branca.jpg",
  "img/cruzeiro_branca.jpg":"img/cruzeiro_branca.jpg",
  "img/koea_do_sul_vermelha.jpg":"img/koea_do_sul_vermelha.jpg",
  "img/coreia_do_sul.jpg":"img/coreia_do_sul.jpg",
  "img/brasil_azul_polo.jpg":"img/brasil_azul_polo.jpg",
  "img2/liverpool_preta.jpg":"img2/liverpool_preta.jpg",
  "img2/psv.jpg":"img2/Psv.jpg",
  "img/borussia_amarela.jpg":"img/Borussia_Amarela.jpg",
  "img2/psg.jpg":"img2/PSG.jpg",
  "img/bahia_vermelha.jpg":"img/bahia_vermelha.jpg",
  "infantil.img/real_madrid_roxa.jpg":"infantil.img/real_madrid_roxa.jpg",
  "img/ghana_branca.jpg":"img/ghana_branca.jpg",
  "infantil.img/palmeiras_verde.jpg":"infantil.img/palmeiras_verde.jpg",
  "img2/roma_vermelha.jpg":"img2/roma_vermelha.jpg",
  "img/cruzeiro_azul.jpg":"img/cruzeiro_azul.jpg",
  "img/realmadri_brancalistrada.jpg":"img/RealMadri_BrancaListrada.jpg",
  "img/botafogo.jpg":"img/Botafogo.jpg",
  "img/juventus_branca.jpg":"img/juventus_branca.jpg",
  "infantil.img/palmeiras.jpg":"infantil.img/palmeiras.jpg",
  "img/botafogo_preta.jpg":"img/botafogo_preta.jpg",
  "img/italia_azul.jpg":"img/italia_azul.jpg",
  "img2/corinthians_fem.jpg":"img2/corinthians_fem.jpg",
  "img2/sport_recife.jpg":"img2/sport_recife.jpg",
  "img/brasil_amarela_jogador.jpg":"img/brasil_amarela_jogador.jpg",
  "bermudas.img/nike_cinza.jpg":"bermudas.img/nike_cinza.jpg",
  "img/benfica_branca.jpg":"img/benfica_branca.jpg",
  "infantil.img/cruzeiro.jpg":"infantil.img/cruzeiro.jpg",
  "img/japao.jpg":"img/japao.jpg",
  "img2/vilareal.jpg":"img2/VilaReal.jpg",
  "img/roma_branca.jpg":"img/roma_branca.jpg",
  "img/west_ham_vinho.jpg":"img/west_ham_vinho.jpg",
  "img/astonvilla_vinho.jpg":"img/AstonVilla_Vinho.jpg",
  "img/manchester_united_preta.jpg":"img/manchester_united_preta.jpg",
  "infantil.img/sao_paulo.jpg":"infantil.img/sao_paulo.jpg",
  "img/inter_miami_azul_claro.jpg":"img/inter_miami_azul_claro.jpg",
  "img/bayerm_pretacinza.jpg":"img/BayerM_PretaCinza.jpg",
  "img/totenham_branca.jpg":"img/Totenham_Branca.jpg",
  "img/manchester_united_t3_tezos.jpg":"img/manchester_united_t3_tezos.jpg"
};

// Apply mapping: if a product's src (normalized) exists in SRC_MAP, point to the real file
function normalizeKeyFromSrc(src) {
  if (!src || typeof src !== 'string') return src;
  try {
    const parts = src.split('/');
    const dir = parts.length > 1 ? parts.slice(0, -1).join('/') : '';
    const file = parts[parts.length - 1];
    const m = file.match(/^(.*?)(\.[^.]*)?$/);
    const name = m ? m[1] : file;
    const ext = m && m[2] ? m[2].toLowerCase() : '';
    // remove diacritics, replace non-alphanum with underscore, collapse underscores, lowercase
    const cleaned = String(name)
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[^\p{L}\p{N}]+/gu, '_')
      .replace(/^_+|_+$/g, '')
      .toLowerCase();
    const key = (dir ? dir + '/' : '') + cleaned + ext;
    return key;
  } catch (e) {
    return src.toLowerCase();
  }
}

// Normalize product.src into keys and map to real filenames when possible.
PRODUCTS.forEach(p => {
  if (!p || !p.src) return;
  const raw = String(p.src || '');
  // handle obvious broken template placeholders
  if (raw.includes('${') || raw.includes('`')) {
    // use a safe fallback logo present in the repo
    p.src = 'img/LogoAtitudeSports.jpeg';
    return;
  }
  // if already exact match in SRC_MAP, keep mapped value
  if (SRC_MAP[raw]) { p.src = SRC_MAP[raw]; return; }
  const key = normalizeKeyFromSrc(raw);
  if (SRC_MAP[key]) { p.src = SRC_MAP[key]; return; }
  // try fallback: lowercased path
  const lower = raw.toLowerCase();
  if (SRC_MAP[lower]) { p.src = SRC_MAP[lower]; return; }
});

// --- Produtos infantis (imagens em `infantil.img/`) ---
// Esses arquivos existem na pasta `infantil.img/` e serão exibidos quando o filtro
// 'Infantil' for ativado. Mantemos team='Infantil' para facilitar a filtragem.
// normalized filenames for infantil.img (lowercase, underscores, .jpg)
const INFANTIL_FILES = [
  'atletico_mineiro.jpg',
  'botafogo.jpg',
  'corinthians.jpg',
  'cruzeiro_branca.jpg',
  'cruzeiro.jpg',
  'fluminense.jpg',
  'inter_miami.jpg',
  'internacional_vermelho.jpg',
  'manchester_united.jpg',
  'palmeiras_verde.jpg',
  'palmeiras.jpg',
  'psg.jpg',
  'real_madrid_preta.jpg',
  'real_madrid_roxa.jpg',
  'real_madrid.jpg',
  'sao_paulo_branca.jpg',
  'sao_paulo_vermelho.jpg',
  'sao_paulo.jpg',
  'sao_paulo1.jpg'
];

INFANTIL_FILES.forEach((fn, i) => {
  const fileName = String(fn).trim();
  // derive display name from filename (replace underscores, remove extension, restore spacing)
  const name = fileName.replace(/\.[^.]+$/, '').replace(/_/g, ' ');
  PRODUCTS.push({ id: '', name: name, team: 'Infantil', league: '', type: 'image', src: `infantil.img/${fileName}` });
});

// --- Produtos bermudas Nike (imagens em `bermudas.img/`) ---
// normalized filenames for bermudas.img (lowercase, underscores, .jpg)
const BERMUDAS_FILES = [
  'nike_branco.jpg',
  'nike_cinza_reflexo.jpg',
  'nike_cinza.jpg',
  'nike_laranja.jpg',
  'nike_preto_branco.jpg',
  'nike_preto_detalhe_branco.jpg',
  'nike_preto_faixa_branca.jpg',
  'nike_preto_reflexo.jpg',
  'nike_preto_reflexo1.jpg',
  'nike_preto.jpg',
  'nike_verde_agua.jpg',
  'nike_verde.jpg'
];

BERMUDAS_FILES.forEach((fn, i) => {
  const fileName = String(fn).trim();
  const name = fileName.replace(/\.[^.]+$/, '').replace(/_/g, ' ');
  PRODUCTS.push({ id: '', name: name, team: 'Nike Shorts', league: '', type: 'image', src: `bermudas.img/${fileName}` });
});

const state = { selected: new Set(), searchTerm: '', teamFilter: '', leagueFilter: '', customizations: {} };

// Helper: normalize string to ASCII lowercase (remove diacritics, collapse spaces)
function normalizeStringForKey(s) {
  if (!s) return '';
  return String(s)
    .replace(/[_\-]+/g, ' ')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^\p{L}\p{N} ]+/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

// Generate a stable product code: 3-4 letters from team/name + 3-digit index
function makeCodeFrom(p, index) {
  const raw = (p.team || (p.name || '').split(/\s+/)[0] || 'PRD');
  const part = String(raw)
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^A-Za-z0-9]/g, '')
    .slice(0,4)
    .toUpperCase();
  const num = String(index + 1).padStart(3, '0');
  return `${part}-${num}`;
}

// Map a source path to a normalized serving path: remove diacritics, replace non-alnum with underscores, lowercase.
// Serve the path as-is but safely encode filename characters (spaces, accents)
// so the browser can request files that contain spaces or non-ASCII characters.
// We intentionally preserve the original file name case to match the
// repository filenames (GitHub is case-sensitive).
function normalizeServingPath(src) {
  if (!src || typeof src !== 'string') return src;
  try {
    const parts = src.split('/');
    if (parts.length === 0) return src;
    const dir = parts.length > 1 ? parts.slice(0, -1).join('/') : '';
    const file = parts[parts.length - 1];
    // encode only the filename (preserve directory structure and case)
    // encodeURIComponent will percent-encode spaces and special chars
    const encodedFile = encodeURIComponent(file);
    return dir ? `${dir}/${encodedFile}` : encodedFile;
  } catch (e) {
    return src;
  }
}

// Runtime: normalize names and remove simple duplicates (keep first occurrence).
(function normalizeAndDedupeProducts() {
  const seen = new Set();
  const out = [];
  PRODUCTS.forEach(p => {
    const key = normalizeStringForKey(p.name || p.src || '');
    if (seen.has(key)) {
      console.warn('Produto duplicado removido (runtime):', p.name, p.src);
      return;
    }
    seen.add(key);
    // Normalize display name: replace underscores, collapse spaces
    p.name = String(p.name || p.src || '').replace(/[_]+/g, ' ').replace(/\s+/g, ' ').trim();
    out.push(p);
  });
  // mutate PRODUCTS array in-place
  PRODUCTS.splice(0, PRODUCTS.length, ...out);
})();

// Note: Codes and ids will be (re)generated at initialization so we can
// renumber products sequentially and preserve any saved customizations.

// --- customizations persistence (localStorage) ---
const CUSTOM_STORAGE_KEY = 'atitude_customizations_v1';
function loadCustomizationsFromStorage() {
  try {
    const raw = localStorage.getItem(CUSTOM_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') state.customizations = parsed;
    }
  } catch (e) { console.warn('Falha ao carregar customizações do localStorage', e); }
}
function saveCustomizationsToStorage() {
  try {
    localStorage.setItem(CUSTOM_STORAGE_KEY, JSON.stringify(state.customizations || {}));
  } catch (e) { console.warn('Falha ao salvar customizações no localStorage', e); }
}

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') node.className = v;
    else if (k.startsWith('data-')) node.setAttribute(k, v);
    else if (k === 'onclick') node.addEventListener('click', v);
    else node[k] = v;
  });
  children.flat().forEach(c => { if (c == null) return; node.append(typeof c === 'string' ? document.createTextNode(c) : c); });
  return node;
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';
  const filtered = getFilteredProducts();
  console.log('renderProducts -> filtered count:', filtered.length);
  if (filtered.length === 0) {
    const empty = el('div', { class: 'hint' }, 'Nenhum resultado para sua pesquisa.');
    grid.appendChild(empty);
  }
  filtered.forEach(p => {
    const card = el('article', { class: 'card', id: `card-${p.id}` });

  const mediaWrap = el('div', { class: 'media' });
  // badge de seleção (aparece quando o card tem .selected)
  const badge = el('div', { class: 'check-badge', 'aria-hidden': 'true' }, '✓');
  mediaWrap.appendChild(badge);
    if (p.type === 'image') {
      // try to serve normalized path (we normalized filenames on disk to ascii_lowercase_underscores)
      const servedSrc = normalizeServingPath(p.src || '');
      const img = el('img', { src: servedSrc, alt: p.name });
      // lazy load to improve performance on mobile
      img.loading = 'lazy';
      // click to open modal
      img.addEventListener('click', () => openModal(p));
      // build a list of fallback candidates and try them on error before showing placeholder
      const candidates = buildFallbackSrcCandidates(p.src || '');
      img._candidates = candidates;
      img._attempt = 0;
      img.addEventListener('error', function onErr() {
        try {
          const self = this;
          self._attempt = (self._attempt || 0) + 1;
          if (self._candidates && self._attempt < self._candidates.length) {
            const next = self._candidates[self._attempt];
            console.warn('Imagem não encontrada, tentando fallback:', next);
            // set to next candidate (already URI-encoded by builder)
            self.src = next;
            return;
          }
        } catch (e) {
          console.warn('Erro ao tentar fallbacks de imagem', e);
        }
        // no more candidates — show placeholder
        console.warn('Imagem não encontrada ou falhou ao carregar (todos fallbacks):', p.src);
        img.src = placeholderDataUrl(p.name || 'Imagem indisponível');
        img.classList.add('img-failed');
        img.alt = p.name + ' (imagem indisponível)';
        // remove this handler
        img.removeEventListener('error', onErr);
      });
      mediaWrap.appendChild(img);
    } else if (p.type === 'video') {
      const video = el('video', { src: p.src, poster: p.poster, controls: false, muted: true });
      video.addEventListener('click', () => openModal(p));
      mediaWrap.appendChild(video);
    }

    const metaText = ((p.team || '') + (p.team && p.league ? ' • ' : '') + (p.league || '')).trim();

    // load existing customization for this product if available (we only support size now)
    // NOTE: default size is empty so the UI shows an empty response box until the user chooses a size
    const custom = state.customizations[p.id] || { size: '' };

  
    // build size select dynamically: infantil uses numeric sizes, adults use P/M/G/...
    const sizeOptions = (p.team === 'Infantil')
      ? ['18','20','22','24','26','28']
      : ['P','M','G','GG','XG'];
    const sizeSelect = el('select', { class: 'custom-size' },
      el('option', { value: '', disabled: true, hidden: true }, 'Selecionar tamanho'),
      ...sizeOptions.map(s => el('option', { value: s }, s))
    );
    sizeSelect.value = custom.size || '';

    // wire size select to state
    sizeSelect.addEventListener('change', (e) => {
      state.customizations[p.id] = Object.assign({}, state.customizations[p.id] || {}, { size: e.target.value });
      saveCustomizationsToStorage();
    });

    const customizeRow = el('div', { class: 'customize' },
      el('div', { class: 'custom-field' }, sizeSelect)
    );

    const body = el('div', { class: 'card-body' },
      el('h3', { class: 'product-name' }, p.name),
      
      el('div', { class: 'product-code' }, p.code),
      el('div', { class: 'meta' }, metaText),
      customizeRow,
      el('div', { class: 'card-actions' },
        el('button', { class: 'select-btn', onclick: () => toggleSelect(p.id) }, 'Selecionar')
      )
    );

    card.appendChild(mediaWrap);
    card.appendChild(body);
    grid.appendChild(card);
  });
  refreshSelectionUI();
}

// Gera um data URL SVG simples como placeholder quando a imagem original não existe
function placeholderDataUrl(title) {
  const safe = escapeHtml(title || 'Imagem indisponível');
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'>
    <rect width='100%' height='100%' fill='#0b1220' />
    <text x='50%' y='50%' fill='#9aa4b2' font-family='Poppins, Arial, sans-serif' font-size='28' dominant-baseline='middle' text-anchor='middle'>${safe}</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function getFilteredProducts() {
  const term = (state.searchTerm || '').trim().toLowerCase();
  // teamFilter can be: '' (explicit Adult view), a non-empty string to filter by team, or falsy to mean no team filtering
  const teamRaw = state.teamFilter;
  const team = (typeof teamRaw === 'string') ? teamRaw.trim() : teamRaw;
  const league = (state.leagueFilter || '').trim();

  return PRODUCTS.filter(p => {
    // league filter
    if (league && String(p.league || '').toLowerCase() !== league.toLowerCase()) return false;

    // team filter handling:
    // - if team === '' : special "Adulto" mode -> exclude Infantil and Nike Shorts
    // - if team is a non-empty string -> include only matching team (case-insensitive)
    if (team === '') {
      const t = String(p.team || '').toLowerCase();
      if (t === 'infantil' || t === 'nike shorts') return false;
    } else if (team) {
      if (String(p.team || '').toLowerCase() !== String(team).toLowerCase()) return false;
    }

    if (!term) return true;
    return (p.name || '').toLowerCase().includes(term);
  });
}

function setTeamFilter(team) {
  state.teamFilter = team || '';
  // update active state for team buttons only; do not clear league filter (allow combined selection)
  document.querySelectorAll('.team-btn').forEach(b => {
    if ((b.dataset.team || '') === (team || '')) b.classList.add('active');
    else b.classList.remove('active');
  });
  renderProducts();
}

function setLeagueFilter(league) {
  state.leagueFilter = league || '';
  // update active state for league buttons only; do not clear team filter (allow combined selection)
  document.querySelectorAll('.league-btn').forEach(b => {
    if ((b.dataset.league || '') === (league || '')) b.classList.add('active');
    else b.classList.remove('active');
  });
  renderProducts();
}

function toggleSelect(id) {
  if (state.selected.has(id)) state.selected.delete(id);
  else state.selected.add(id);
  refreshSelectionUI();
}

function refreshSelectionUI() {
  document.querySelectorAll('.card').forEach(card => card.classList.remove('selected'));
  state.selected.forEach(id => {
    const c = document.getElementById(`card-${id}`);
    if (c) c.classList.add('selected');
  });
  // mostra quantos selecionados e quantos exibidos atualmente
  const displayed = document.querySelectorAll('.card').length;
  const sc = document.querySelector('#selected-count');
  if (sc) sc.innerHTML = `Selecionados: <strong>${state.selected.size}</strong> • Exibidos: <strong>${displayed}</strong>`;
  refreshButtons();
}

// Atualiza texto e estado dos botões de seleção dentro de cada card
function refreshButtons() {
  document.querySelectorAll('.card').forEach(card => {
    const id = card.id.replace('card-', '');
    const btn = card.querySelector('.select-btn');
    if (!btn) return;
    if (state.selected.has(id)) {
      btn.classList.add('selected');
      btn.textContent = 'Selecionado';
    } else {
      btn.classList.remove('selected');
      btn.textContent = 'Selecionar';
    }
  });
}

function showToast(message = '') {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = message;
  document.body.appendChild(t);
  // força reflow
  void t.offsetWidth;
  t.classList.add('show');
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2200);
}

function clearSelection() {
  state.selected.clear();
  refreshSelectionUI();
  showToast('Seleção limpa');
}


function openModal(product) {
  const modal = document.getElementById('media-modal');
  const body = document.getElementById('modal-body');
  body.innerHTML = '';
  if (product.type === 'image') {
    const img = el('img', { src: normalizeServingPath(product.src || ''), alt: product.name, style: 'width:100%;height:auto;display:block' });
    body.appendChild(img);
  } else {
    const video = el('video', { src: product.src, controls: true, autoplay: true, style: 'width:100%;height:auto;display:block' });
    body.appendChild(video);
  }
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const modal = document.getElementById('media-modal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  const body = document.getElementById('modal-body');
  body.innerHTML = '';
}

function sendToAttendant() {
  if (state.selected.size === 0) {
    alert('Selecione ao menos uma camiseta antes de enviar.');
    return;
  }

  // Monta a lista de produtos selecionados
  const lines = ['Olá, tenho interesse nas seguintes camisetas da AtitudeSports:'];
  Array.from(state.selected).forEach(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (p) {
    const c = state.customizations[id] || {};
    let entry = `- ${p.name} [CÓD: ${p.code}]`;
    const extras = [];
    if (c.size) extras.push(`Tamanho: ${c.size}`);
    if (extras.length) entry += ' (' + extras.join(' | ') + ')';
      lines.push(entry);
    }
  });
  lines.push('', 'Por favor, entre em contato:');
  const message = lines.join('\n');

  // Número do atendente: assumimos código do Brasil +55 se não informado
  // Número solicitado: 43996756536 -> internacional: 55 43 99675-6536
  const phoneIntl = '5543996756536';

  const encoded = encodeURIComponent(message);
  const waUrl = `https://wa.me/${phoneIntl}?text=${encoded}`;
  // tenta copiar a mensagem como fallback e mostra feedback
  if (navigator.clipboard) {
    navigator.clipboard.writeText(message).then(() => {
      showToast('Mensagem copiada. Abrindo o WhatsApp...');
      window.open(waUrl, '_blank');
    }).catch(() => {
      showToast('Abrindo o WhatsApp...');
      window.open(waUrl, '_blank');
    });
  } else {
    showToast('Abrindo o WhatsApp...');
    window.open(waUrl, '_blank');
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  loadCustomizationsFromStorage();
  // Renumber products sequentially (p1..pN) and remap any saved customizations
  (function renumberAndAssignCodes() {
    // copy saved customizations (keys are old ids like 'p4')
    const oldCustom = Object.assign({}, state.customizations || {});
    const newCustom = {};
    PRODUCTS.forEach((p, i) => {
      // Determine the previous id for this product using ORIGINAL_PRODUCTS mapping
      const oldId = (typeof ORIGINAL_PRODUCTS !== 'undefined' && ORIGINAL_PRODUCTS[i] && ORIGINAL_PRODUCTS[i].id) ? ORIGINAL_PRODUCTS[i].id : p.id;
      const newId = 'p' + String(i + 1);
      p.id = newId;
      p.code = makeCodeFrom(p, i);
      // transfer customization if it existed for oldId
      if (oldCustom && oldCustom[oldId]) newCustom[newId] = oldCustom[oldId];
    });
    state.customizations = Object.assign({}, newCustom, {});
  })();

  renderProducts();
  document.getElementById('clear-selection').addEventListener('click', clearSelection);
  document.getElementById('send-whatsapp').addEventListener('click', sendToAttendant);
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('media-modal').addEventListener('click', e => { if (e.target.id === 'media-modal') closeModal(); });
  // Search handling with simple debounce
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    let timeout = null;
    searchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        state.searchTerm = val;
        renderProducts();
      }, 220);
    });
    // support clearing via ESC and update clear button + suggestions
    const clearBtn = document.getElementById('search-clear');
    const suggestions = document.getElementById('search-suggestions');
    function updateClearAndSuggestions(val) {
      if (clearBtn) clearBtn.hidden = !val;
      // build simple suggestions from PRODUCTS
      if (suggestions) {
        const q = (val || '').trim().toLowerCase();
        if (!q) { suggestions.innerHTML = ''; suggestions.hidden = true; return; }
        const matches = PRODUCTS.filter(p => (p.name || '').toLowerCase().includes(q) || (p.team || '').toLowerCase().includes(q)).slice(0,6);
        suggestions.innerHTML = '';
        if (matches.length === 0) { suggestions.hidden = true; return; }
        matches.forEach(m => {
          const li = document.createElement('li');
          li.tabIndex = 0;
          li.role = 'option';
          li.innerHTML = `<strong>${escapeHtml(m.name)}</strong><small>${escapeHtml(m.team || '')} • ${escapeHtml(m.league || '')}</small>`;
          li.addEventListener('click', () => {
            searchInput.value = m.name;
            state.searchTerm = m.name;
            suggestions.hidden = true;
            renderProducts();
            if (clearBtn) clearBtn.hidden = false;
          });
          li.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') li.click(); });
          suggestions.appendChild(li);
        });
        suggestions.hidden = false;
      }
    }

    searchInput.addEventListener('input', (e) => { updateClearAndSuggestions(e.target.value); });
    searchInput.addEventListener('keydown', (e) => { if (e.key === 'Escape') { searchInput.value = ''; state.searchTerm = ''; renderProducts(); updateClearAndSuggestions(''); } });
    if (clearBtn) {
      clearBtn.addEventListener('click', () => { searchInput.value = ''; state.searchTerm = ''; renderProducts(); updateClearAndSuggestions(''); searchInput.focus(); });
    }
    // close suggestions when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.composedPath().some(n => n === suggestions || n === searchInput)) {
        if (suggestions) suggestions.hidden = true;
      }
    });
  }
 
});

  // ensure the 'Adulto' tab shows as active initially
  try { setTeamFilter(''); } catch (e) { /* ignore if setTeamFilter not available */ }

// Back-to-top button behavior: show when scrolled down and smooth-scroll to top
(function setupBackToTop() {
  try {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    function updateVisibility() {
      if (window.scrollY > 360) btn.classList.add('show');
      else btn.classList.remove('show');
    }
    // smooth scroll to top on click
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      btn.blur();
    });
    // update on scroll and on load
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);
    // initial state
    updateVisibility();
  } catch (e) {
    console.warn('Falha ao inicializar back-to-top', e);
  }
})();

// small helper to escape HTML when inserting suggestion text
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Build a list of fallback candidate URLs for a given src.
// We preserve original filename but also generate common variants
// (lowercased, underscores, lowercase extension, img2 alternative).
function buildFallbackSrcCandidates(src) {
  if (!src || typeof src !== 'string') return [];
  try {
    const parts = src.split('/');
    if (parts.length === 0) return [];
    const dir = parts.length > 1 ? parts.slice(0, -1).join('/') : '';
    const file = parts[parts.length - 1];
    const m = file.match(/^(.*?)(\.[^.]*)?$/);
    const name = m ? m[1] : file;
    const ext = m && m[2] ? m[2] : '';

    const candidates = [];
    // 1) original (encoded)
    candidates.push((dir ? dir + '/' : '') + encodeURIComponent(file));

    // 2) same name but lowercased extension (e.g. .JPG -> .jpg)
    if (ext && ext !== ext.toLowerCase()) {
      candidates.push((dir ? dir + '/' : '') + encodeURIComponent(name + ext.toLowerCase()));
    }

    // 3) normalized: remove diacritics, replace non-alnum with underscore and lowercase
    try {
      const nf = name.normalize('NFD').replace(/\p{Diacritic}/gu, '');
      const cleaned = nf.replace(/[^\p{L}\p{N}]+/gu, '_').replace(/^_+|_+$/g, '').toLowerCase();
      if (cleaned && cleaned !== name) {
        candidates.push((dir ? dir + '/' : '') + encodeURIComponent(cleaned + ext.toLowerCase()));
      }
    } catch (e) {
      // ignore normalization errors
    }

    // 4) replace spaces with underscores and lowercase (common naming)
    const sp = name.replace(/\s+/g, '_').toLowerCase();
    if (sp && sp !== name) candidates.push((dir ? dir + '/' : '') + encodeURIComponent(sp + ext.toLowerCase()));

    // 5) lowercase name but keep spaces (some files are lowercase with spaces)
    const lowSpaces = name.toLowerCase();
    if (lowSpaces && lowSpaces !== name) candidates.push((dir ? dir + '/' : '') + encodeURIComponent(lowSpaces + ext.toLowerCase()));

    // 6) name without any separators (concat) - sometimes filenames are glued
    const nospace = name.replace(/[^\p{L}\p{N}]+/gu, '').toLowerCase();
    if (nospace && nospace !== name && nospace !== sp) candidates.push((dir ? dir + '/' : '') + encodeURIComponent(nospace + ext.toLowerCase()));

    // 7) try common extension variants (.jpg/.jpeg/.png/.webp)
    const extsToTry = ['.jpg', '.jpeg', '.png', '.webp'];
    if (ext) {
      const extLower = ext.toLowerCase();
      extsToTry.forEach(e => {
        if (e !== extLower) {
          candidates.push((dir ? dir + '/' : '') + encodeURIComponent(name + e));
          candidates.push((dir ? dir + '/' : '') + encodeURIComponent(name.toLowerCase() + e));
          candidates.push((dir ? dir + '/' : '') + encodeURIComponent(sp + e));
        }
      });
    }

    // 8) try alternative directory img2 when original is img (some products stored there)
    if (dir === 'img') {
      candidates.push('img2/' + encodeURIComponent(file));
      candidates.push('img2/' + encodeURIComponent(name.toLowerCase() + (ext ? ext.toLowerCase() : '')));
      if (sp && sp !== name) candidates.push('img2/' + encodeURIComponent(sp + (ext ? ext.toLowerCase() : '')));
      // also try common extension variants in img2
      const exts = ['.jpg', '.jpeg', '.png', '.webp'];
      exts.forEach(e => {
        candidates.push('img2/' + encodeURIComponent(name + e));
        candidates.push('img2/' + encodeURIComponent(sp + e));
      });
    }

    // Deduplicate while preserving order
    return [...new Set(candidates)];
  } catch (e) {
    return [(encodeURIComponent(src))];
  }
}