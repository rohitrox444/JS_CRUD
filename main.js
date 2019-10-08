// alert("hello");
// 
var userlist = document.getElementById('userList');
var count = 0;

function addUser(){
	var input_data = document.getElementById('data').value;
	//console.log(input_data);

	

	var html = '<div class="row" style="margin-bottom: 15px;" id = "data'+count+'"> '+
				'<div class="col-md-6 col-sm-12">'+
					'<input type="text" name="" class="form-control" value="'+input_data+'" disabled>'+
				'</div>'+
				'<div class="col-md-2 col-sm-4">'+
					'<button class="btn btn-sucess" id="edit'+count+'" onclick=edit(this.id)>Edit</button>'+
				'</div>'+
				'<div class="col-md-2 col-sm-4">'+
					'<button class="btn btn-info" id="update'+count+'" onclick=update(this.id)>Update</button>'+
				'</div>'+
				'<div class="col-md-2 col-sm-4">'+
					'<button class="btn btn-danger" id="delete'+count+'" onclick=deletedata(this.id)>Delete</button>'+
				'</div>'+
			'</div>';

			userlist.insertAdjacentHTML('beforeend',html);
			count++;
}

function edit(editid){
	//console.log(editid);
	var parent = document.getElementById(editid).parentNode.parentNode;
	var child = parent.firstChild.firstChild;
	console.log(parent);
	console.log(child);
	child.removeAttribute('disabled');

}

function update(updateid){
	console.log(updateid);
}

function deletedata(deleteid){
	console.log(deleteid);
}