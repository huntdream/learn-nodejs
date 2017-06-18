var fs = require('fs');
var path = require('path');
var args = process.argv.splice(2);
var command = args.shift();
var taskDes = args.join(' ');
var file = path.join(process.cwd(), '/.tasks');

switch (command) {
    case 'list':
        listTasks(file);
        break;

    case 'add':
        addTask(file, taskDes);
        break;

    case 'delete':
        deleteTask(file,taskDes);
        break;
        
    default:
        console.log('Usage: ' + process.argv[0] + ' list|add [taskDescription]');
}

function loadOrInitializeTaskArray(file, cb) {
    fs.exists(file, function (exists) {
        var tasks = [];
        if (exists) {
            fs.readFile(file, 'utf8', function (err, data) {
                if (err) throw err;
                var data = data.toString();
                var tasks = JSON.parse(data || '[]');
                cb(tasks);
            });
        } else {
            cb([]);
        }
    });
}

function listTasks(file) {
    loadOrInitializeTaskArray(file, function (tasks) {
        for (var i in tasks) {
            console.log(tasks[i]);
        }
    })
};

function storeTasks(file,tasks){
    fs.writeFile(file,JSON.stringify(tasks),'utf8',function(err){
        if(err) throw err;
        console.log('Saved');
    });
}

function addTask(file,taskDes){
    loadOrInitializeTaskArray(file,function(tasks){
        tasks.push(taskDes);
        storeTasks(file,tasks);
    });
}

function deleteTask(file,index){
    loadOrInitializeTaskArray(file,function(tasks){
        tasks.splice(index,1);
        storeTasks(file,tasks);
    })
}