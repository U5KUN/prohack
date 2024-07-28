h5gg.clearResults();
h5gg.searchNumber('2200465399785425311', 'I64', '0x000000000', '0x300000000');
var counts = h5gg.getResultsCount();
var results = h5gg.getResults(counts, 0);
for(var i=0; i<counts; i++){
h5gg.setValue(Number(results[i].address) + 120, "1", 'I32');
}